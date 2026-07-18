"use client";

import { useEffect, useRef, useState } from "react";

// Chrome内蔵AI (Gemini Nano) を使うツールバー。
// Summarizer / Translator API はWeb標準のグローバルとして提供される。
// 非対応ブラウザでは案内メッセージを出すだけで、記事の閲覧には影響しない。

type Props = {
  title: string;
  text: string;
};

type Busy = null | "summary" | "keypoints" | "translate-en" | "translate-ko";

const UNSUPPORTED_MSG =
  "この機能はブラウザ内蔵AI(Chrome 138以降のGemini Nano)が必要です。対応ブラウザで開くと、オンデバイスで要約・翻訳が動きます。";

function getGlobal(name: "Summarizer" | "Translator"): any {
  return (globalThis as any)[name];
}

export function AiToolbar({ title, text }: Props) {
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
      setProgress(`モデルをダウンロード中… ${pct}%(初回のみ)`);
    });
  };

  async function summarize(type: "tldr" | "key-points", label: string) {
    const S = getGlobal("Summarizer");
    setOutputLabel(label);
    if (!S) {
      setOutput(UNSUPPORTED_MSG);
      return;
    }
    setBusy(type === "tldr" ? "summary" : "keypoints");
    setOutput("");
    setProgress("準備中…");
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
      setProgress("要約を生成中…");
      const result = await summarizer.summarize(text.slice(0, 12000), {
        context: `ブログ記事「${title}」の本文です。`,
      });
      setOutput(result);
    } catch {
      setOutput(
        "要約モデルをこの環境で実行できませんでした。Chromeの最新版でお試しください。"
      );
    } finally {
      setBusy(null);
      setProgress("");
    }
  }

  async function translate(target: "en" | "ko", label: string) {
    const T = getGlobal("Translator");
    setOutputLabel(label);
    if (!T) {
      setOutput(UNSUPPORTED_MSG);
      return;
    }
    setBusy(target === "en" ? "translate-en" : "translate-ko");
    setOutput("");
    setProgress("準備中…");
    try {
      const availability = await T.availability({
        sourceLanguage: "ja",
        targetLanguage: target,
      });
      if (availability === "unavailable") {
        setOutput("この言語ペアの翻訳モデルは、この環境では利用できません。");
        return;
      }
      const translator = await T.create({
        sourceLanguage: "ja",
        targetLanguage: target,
        monitor,
      });
      setProgress("翻訳中…");
      const result = await translator.translate(text.slice(0, 8000));
      setOutput(result);
    } catch {
      setOutput(
        "翻訳モデルをこの環境で実行できませんでした。Chromeの最新版でお試しください。"
      );
    } finally {
      setBusy(null);
      setProgress("");
    }
  }

  function toggleSpeech() {
    if (typeof speechSynthesis === "undefined") {
      setOutputLabel("読み上げ");
      setOutput("このブラウザは音声合成に対応していません。");
      return;
    }
    if (speaking) {
      speakingRef.current = false;
      speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    // 長文を文単位のチャンクに分けて順番に読む
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
          onClick={() => summarize("tldr", "AI要約 (TL;DR)")}
        >
          {busy === "summary" ? "生成中…" : "✦ AI要約"}
        </button>
        <button
          className="btn-ai"
          disabled={busy !== null}
          onClick={() => summarize("key-points", "AI要点リスト")}
        >
          {busy === "keypoints" ? "生成中…" : "✦ 要点リスト"}
        </button>
        <button
          className="btn-ai"
          disabled={busy !== null}
          onClick={() => translate("en", "English translation")}
        >
          {busy === "translate-en" ? "翻訳中…" : "EN 翻訳"}
        </button>
        <button
          className="btn-ai"
          disabled={busy !== null}
          onClick={() => translate("ko", "한국어 번역")}
        >
          {busy === "translate-ko" ? "翻訳中…" : "KO 번역"}
        </button>
        <button className="btn-ai" onClick={toggleSpeech}>
          {speaking ? "■ 停止" : "▶ 読み上げ"}
        </button>
      </div>
      {progress && <p className="ai-toolbar-progress">{progress}</p>}
      {output && (
        <div className="ai-toolbar-output">
          <p className="ai-toolbar-output-label">{outputLabel}</p>
          <p className="ai-toolbar-output-text">{output}</p>
        </div>
      )}
      <p className="ai-toolbar-note">
        AI要約・翻訳はブラウザ内蔵AI(Gemini Nano)でオンデバイス実行されます。本文が外部サーバーへ送信されることはありません。
      </p>
    </div>
  );
}
