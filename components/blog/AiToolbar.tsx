"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n";
import { ui } from "@/lib/ui";

// Chrome内蔵AI (Gemini Nano) を使うツールバー。
// Summarizer / Translator API はWeb標準のグローバルとして提供される。
// 非対応ブラウザでは案内メッセージを出すだけで、記事の閲覧には影響しない。

type Props = {
  title: string;
  text: string;
};

type Busy = null | "summary" | "keypoints" | "translate-en" | "translate-ko";

function getGlobal(name: "Summarizer" | "Translator"): any {
  return (globalThis as any)[name];
}

export function AiToolbar({ title, text }: Props) {
  const { locale } = useLocale();
  const t = ui[locale];
  const [busy, setBusy] = useState<Busy>(null);
  const [progress, setProgress] = useState("");
  const [output, setOutput] = useState("");
  const [outputLabel, setOutputLabel] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const speakingRef = useRef(false);

  useEffect(() => {
    return () => {
      speakingRef.current = false;
      if (typeof speechSynthesis !== "undefined") speechSynthesis.cancel();
    };
  }, []);

  const monitor = (m: any) => {
    m.addEventListener("downloadprogress", (e: any) => {
      const pct = Math.round((e.loaded ?? 0) * 100);
      setProgress(t.aiDownloading(pct));
    });
  };

  async function summarize(type: "tldr" | "key-points", label: string) {
    const S = getGlobal("Summarizer");
    setOutputLabel(label);
    if (!S) {
      setOutput(t.aiUnsupported);
      return;
    }
    setBusy(type === "tldr" ? "summary" : "keypoints");
    setOutput("");
    setProgress(t.aiPreparing);
    try {
      const base = {
        type,
        format: "plain-text",
        length: type === "tldr" ? "short" : "medium",
        monitor,
      };
      let summarizer;
      try {
        summarizer = await S.create({
          ...base,
          expectedInputLanguages: ["ja"],
          outputLanguage: "ja",
        });
      } catch {
        summarizer = await S.create(base);
      }
      setProgress(t.aiSummarizing);
      const result = await summarizer.summarize(text.slice(0, 12000), {
        context: `ブログ記事「${title}」の本文です。`,
      });
      setOutput(result);
    } catch {
      setOutput(t.aiSummaryFailed);
    } finally {
      setBusy(null);
      setProgress("");
    }
  }

  async function translate(target: "en" | "ko", label: string) {
    const T = getGlobal("Translator");
    setOutputLabel(label);
    if (!T) {
      setOutput(t.aiUnsupported);
      return;
    }
    setBusy(target === "en" ? "translate-en" : "translate-ko");
    setOutput("");
    setProgress(t.aiPreparing);
    try {
      const availability = await T.availability({
        sourceLanguage: "ja",
        targetLanguage: target,
      });
      if (availability === "unavailable") {
        setOutput(t.aiPairUnavailable);
        return;
      }
      const translator = await T.create({
        sourceLanguage: "ja",
        targetLanguage: target,
        monitor,
      });
      setProgress(t.aiTranslating);
      const result = await translator.translate(text.slice(0, 8000));
      setOutput(result);
    } catch {
      setOutput(t.aiTranslateFailed);
    } finally {
      setBusy(null);
      setProgress("");
    }
  }

  function toggleSpeech() {
    if (typeof speechSynthesis === "undefined") {
      setOutputLabel(t.aiSpeechLabel);
      setOutput(t.aiSpeechUnsupported);
      return;
    }
    if (speaking) {
      speakingRef.current = false;
      speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    // 長文を文単位のチャンクに分けて順番に読む(本文は日本語)
    const sentences = `${title}。${text}`.match(/[^。!?！?]+[。!?！?]?/g) ?? [];
    const chunks: string[] = [];
    let current = "";
    for (const s of sentences) {
      if ((current + s).length > 180) {
        if (current) chunks.push(current);
        current = s;
      } else {
        current += s;
      }
    }
    if (current) chunks.push(current);
    if (chunks.length === 0) return;

    speakingRef.current = true;
    setSpeaking(true);
    let i = 0;
    const speakNext = () => {
      if (!speakingRef.current || i >= chunks.length) {
        speakingRef.current = false;
        setSpeaking(false);
        return;
      }
      const u = new SpeechSynthesisUtterance(chunks[i]);
      u.lang = "ja-JP";
      u.onend = () => {
        i += 1;
        speakNext();
      };
      u.onerror = () => {
        speakingRef.current = false;
        setSpeaking(false);
      };
      speechSynthesis.speak(u);
    };
    speakNext();
  }

  return (
    <div className="ai-toolbar">
      <div className="ai-toolbar-buttons">
        <button
          className="btn-ai"
          disabled={busy !== null}
          onClick={() => summarize("tldr", t.aiSummaryLabel)}
        >
          {busy === "summary" ? t.aiGenerating : t.aiSummaryBtn}
        </button>
        <button
          className="btn-ai"
          disabled={busy !== null}
          onClick={() => summarize("key-points", t.aiKeypointsLabel)}
        >
          {busy === "keypoints" ? t.aiGenerating : t.aiKeypointsBtn}
        </button>
        <button
          className="btn-ai"
          disabled={busy !== null}
          onClick={() => translate("en", "English translation")}
        >
          {busy === "translate-en" ? t.aiTranslatingBtn : t.aiTranslateEn}
        </button>
        <button
          className="btn-ai"
          disabled={busy !== null}
          onClick={() => translate("ko", "한국어 번역")}
        >
          {busy === "translate-ko" ? t.aiTranslatingBtn : t.aiTranslateKo}
        </button>
        <button className="btn-ai" onClick={toggleSpeech}>
          {speaking ? t.aiSpeechStop : t.aiSpeechStart}
        </button>
      </div>
      {progress && <p className="ai-toolbar-progress">{progress}</p>}
      {output && (
        <div className="ai-toolbar-output">
          <p className="ai-toolbar-output-label">{outputLabel}</p>
          <p className="ai-toolbar-output-text">{output}</p>
        </div>
      )}
      <p className="ai-toolbar-note">{t.aiNote}</p>
    </div>
  );
}
