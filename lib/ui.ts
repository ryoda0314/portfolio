import type { Locale } from "./locale";

// ============================================================
// UI共通の文言(見出し・ボタン・案内文など)
// プロフィール本文は data/profile.ts、LP作品は data/lpWorks.ts を編集してください。
// ============================================================

const ja = {
  // Hero
  viewWorks: "作品を見る",
  contactMe: "連絡する",

  // セクション見出し
  aboutTitle: "私について",
  worksTitle: "つくったもの",
  skillsTitle: "できること",
  blogTitle: "書いたもの",
  contactTitle: "お気軽にどうぞ",

  // リンク
  lpPortfolioLink: "LP・Web制作の作品集も見る →",
  allPosts: "すべての記事 →",
  minRead: "min read",
  backToBlog: "← Blog",

  // LP作品集ページ
  lpPageTitle: "LP作品集",
  lpPageLead:
    "学園祭・イベント・プロダクト・アーティスト・コーポレートなど、テーマの異なるLP/Webサイトを1ページずつ設計から実装まで制作しています。いずれも架空の団体・製品を想定した自主制作です。カードをクリックすると実物が開きます。",
  lpScreenshotAlt: "のスクリーンショット",

  // 記事検索 (⌘K)
  searchAria: "記事を検索",
  searchPlaceholder: "記事を検索…",
  searchEmpty: "見つかりませんでした",

  // AIツールバー
  aiUnsupported:
    "この機能はブラウザ内蔵AI(Chrome 138以降のGemini Nano)が必要です。対応ブラウザで開くと、オンデバイスで要約・翻訳が動きます。",
  aiDownloading: (pct: number) => `モデルをダウンロード中… ${pct}%(初回のみ)`,
  aiPreparing: "準備中…",
  aiSummarizing: "要約を生成中…",
  aiSummaryFailed:
    "要約モデルをこの環境で実行できませんでした。Chromeの最新版でお試しください。",
  aiPairUnavailable: "この言語ペアの翻訳モデルは、この環境では利用できません。",
  aiTranslating: "翻訳中…",
  aiTranslateFailed:
    "翻訳モデルをこの環境で実行できませんでした。Chromeの最新版でお試しください。",
  aiSummaryLabel: "AI要約 (TL;DR)",
  aiKeypointsLabel: "AI要点リスト",
  aiSummaryBtn: "✦ AI要約",
  aiKeypointsBtn: "✦ 要点リスト",
  aiGenerating: "生成中…",
  aiTranslatingBtn: "翻訳中…",
  aiTranslateEn: "EN 翻訳",
  aiTranslateKo: "KO 번역",
  aiSpeechLabel: "読み上げ",
  aiSpeechUnsupported: "このブラウザは音声合成に対応していません。",
  aiSpeechStop: "■ 停止",
  aiSpeechStart: "▶ 読み上げ",
  aiNote:
    "AI要約・翻訳はブラウザ内蔵AI(Gemini Nano)でオンデバイス実行されます。本文が外部サーバーへ送信されることはありません。",
};

type UiStrings = typeof ja;

const en: UiStrings = {
  viewWorks: "View Works",
  contactMe: "Get in Touch",

  aboutTitle: "About Me",
  worksTitle: "Things I've Built",
  skillsTitle: "What I Can Do",
  blogTitle: "Writing",
  contactTitle: "Say Hello",

  lpPortfolioLink: "See the LP / web design portfolio →",
  allPosts: "All posts →",
  minRead: "min read",
  backToBlog: "← Blog",

  lpPageTitle: "LP Portfolio",
  lpPageLead:
    "A collection of landing pages and websites built one page at a time — campus festivals, events, products, artists, corporate — each designed and implemented from scratch. All are self-initiated works for fictional organizations and products. Click a card to open the real page.",
  lpScreenshotAlt: " — screenshot",

  searchAria: "Search posts",
  searchPlaceholder: "Search posts…",
  searchEmpty: "No results found",

  aiUnsupported:
    "This feature requires the browser's built-in AI (Gemini Nano, Chrome 138+). Open this page in a supported browser to run summaries and translations on-device.",
  aiDownloading: (pct: number) => `Downloading model… ${pct}% (first time only)`,
  aiPreparing: "Preparing…",
  aiSummarizing: "Generating summary…",
  aiSummaryFailed:
    "The summarizer model couldn't run in this environment. Please try the latest version of Chrome.",
  aiPairUnavailable:
    "The translation model for this language pair isn't available in this environment.",
  aiTranslating: "Translating…",
  aiTranslateFailed:
    "The translation model couldn't run in this environment. Please try the latest version of Chrome.",
  aiSummaryLabel: "AI Summary (TL;DR)",
  aiKeypointsLabel: "AI Key Points",
  aiSummaryBtn: "✦ AI Summary",
  aiKeypointsBtn: "✦ Key Points",
  aiGenerating: "Generating…",
  aiTranslatingBtn: "Translating…",
  aiTranslateEn: "EN Translation",
  aiTranslateKo: "KO 번역",
  aiSpeechLabel: "Read Aloud",
  aiSpeechUnsupported: "This browser doesn't support speech synthesis.",
  aiSpeechStop: "■ Stop",
  aiSpeechStart: "▶ Read Aloud",
  aiNote:
    "AI summaries and translations run on-device with the browser's built-in AI (Gemini Nano). The article text is never sent to an external server.",
};

const ko: UiStrings = {
  viewWorks: "작품 보기",
  contactMe: "연락하기",

  aboutTitle: "저에 대해",
  worksTitle: "만든 것들",
  skillsTitle: "할 수 있는 것들",
  blogTitle: "쓴 글",
  contactTitle: "편하게 연락 주세요",

  lpPortfolioLink: "LP·웹 제작 작품집 보기 →",
  allPosts: "모든 글 →",
  minRead: "min read",
  backToBlog: "← Blog",

  lpPageTitle: "LP 작품집",
  lpPageLead:
    "학교 축제, 이벤트, 프로덕트, 아티스트, 기업 등 서로 다른 테마의 LP/웹사이트를 한 페이지씩 설계부터 구현까지 제작하고 있습니다. 모두 가상의 단체·제품을 상정한 자체 제작입니다. 카드를 클릭하면 실제 페이지가 열립니다.",
  lpScreenshotAlt: " 스크린샷",

  searchAria: "글 검색",
  searchPlaceholder: "글 검색…",
  searchEmpty: "검색 결과가 없습니다",

  aiUnsupported:
    "이 기능은 브라우저 내장 AI(Chrome 138 이상의 Gemini Nano)가 필요합니다. 지원 브라우저에서 열면 온디바이스로 요약·번역이 동작합니다.",
  aiDownloading: (pct: number) => `모델 다운로드 중… ${pct}% (최초 1회만)`,
  aiPreparing: "준비 중…",
  aiSummarizing: "요약 생성 중…",
  aiSummaryFailed:
    "이 환경에서는 요약 모델을 실행할 수 없습니다. 최신 버전의 Chrome에서 시도해 주세요.",
  aiPairUnavailable: "이 언어 쌍의 번역 모델은 이 환경에서 사용할 수 없습니다.",
  aiTranslating: "번역 중…",
  aiTranslateFailed:
    "이 환경에서는 번역 모델을 실행할 수 없습니다. 최신 버전의 Chrome에서 시도해 주세요.",
  aiSummaryLabel: "AI 요약 (TL;DR)",
  aiKeypointsLabel: "AI 핵심 포인트",
  aiSummaryBtn: "✦ AI 요약",
  aiKeypointsBtn: "✦ 핵심 포인트",
  aiGenerating: "생성 중…",
  aiTranslatingBtn: "번역 중…",
  aiTranslateEn: "EN 번역",
  aiTranslateKo: "KO 번역",
  aiSpeechLabel: "읽어 주기",
  aiSpeechUnsupported: "이 브라우저는 음성 합성을 지원하지 않습니다.",
  aiSpeechStop: "■ 정지",
  aiSpeechStart: "▶ 읽어 주기",
  aiNote:
    "AI 요약·번역은 브라우저 내장 AI(Gemini Nano)로 온디바이스에서 실행됩니다. 본문이 외부 서버로 전송되지 않습니다.",
};

export const ui: Record<Locale, UiStrings> = { ja, en, ko };
