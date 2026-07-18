// ============================================================
// プロフィールデータ
// このファイルの内容を書き換えるだけでサイト全体に反映されます。
// ============================================================

export type Work = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  href?: string;
  status?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const profile = {
  nameRomaji: "Ryo Tsukamoto",
  nameJa: "塚本 諒",
  role: "Engineering Student / App Developer",

  tagline: "アプリも、音楽も、小説も。手を動かして形にする。",

  intro:
    "東京科学大学で機械工学を学びながら、iOSアプリの個人開発と、AIを活用したプロダクトづくりに取り組んでいます。企画からUI設計、実装、リリース、改善までを一人で回すことが得意です。",

  about: {
    heading: "About",
    body: [
      "機械工学を専攻する大学生です。個人開発では、学内向けアプリ2本をApp Storeでリリースしました。",
      "思いついた機能を作るだけでなく、実際に使われる形まで落とし込むことを大切にしています。ユーザーの反応を見ながら、機能、導線、文章、ビジュアルを継続的に改善しています。",
      "技術の軸はWeb・モバイル(TypeScript/Swift)。加えて、AIによる音楽制作や小説執筆など、創作活動にも力を入れています。",
    ],
    interests: [
      "AIを活用したプロダクト開発",
      "Web・モバイルアプリ",
      "UI / UXデザイン",
      "音楽制作(AI作曲)",
      "文芸創作",
      "語学学習(韓国語)",
    ],
  },

  works: [
    {
      title: "ScienceTokyo App",
      category: "Campus App",
      description:
        "東京科学大学での学生生活を、ひとつのアプリにまとめるプロジェクト。時間割、履修登録、学内マップ、LMS連携など、日常的に使う機能を横断的に設計・改善しています。企画からリリース、運用まで個人で担当。",
      tags: ["iOS", "Product Design", "UI / UX", "Community"],
      gradient: "linear-gradient(135deg, #5B67F1 0%, #8A5CF6 100%)",
      href: "https://apps.apple.com/jp/app/id6761738741",
      status: "Released",
    },
    {
      title: "TextNext",
      category: "Marketplace App",
      description:
        "大学の教科書を学生同士で売買できるP2Pマーケットプレイス。必要な教科書へ短い導線で到達できることを重視し、検索から取引までの体験を設計しました。",
      tags: ["iOS", "Next.js", "TypeScript", "Marketplace"],
      gradient: "linear-gradient(135deg, #159957 0%, #155799 100%)",
      href: "https://apps.apple.com/jp/app/id6779549997",
      status: "Released",
    },
    {
      title: "PolyLinga",
      category: "AI Learning Platform",
      description:
        "AIを軸にした多言語学習アプリ。GPT-4によるトークン化、AI添削、Whisperを使った発音評価、TTS音声再生、間隔反復学習(SRS)やレベル・ストリークなどのゲーミフィケーションを備え、Web(PWA)とiOSの両方で動作します。",
      tags: ["Next.js", "Supabase", "OpenAI API", "PWA / Capacitor"],
      gradient: "linear-gradient(135deg, #FF8008 0%, #FFC837 100%)",
      status: "Ongoing",
    },
    {
      title: "Remote Input",
      category: "Utility / System",
      description:
        "iPhoneをPCの入力デバイスに変えるシステム。縦画面では標準キーボードのフリック入力でPCへ日本語入力、横画面ではトラックパッドとして操作できます。PWAとPython製エージェントがWebSocketで通信し、ペアリング認証を経てOSに入力を注入します。",
      tags: ["PWA", "WebSocket", "Python"],
      gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      status: "Ongoing",
    },
    {
      title: "AI音楽制作",
      category: "Music / Creative",
      description:
        "生成AIを用いた楽曲制作。J-pop、アイドル、アートロックなど幅広いジャンルのスタイル設計と作詞を行い、学園祭コンテストへの応募曲や、自作アプリのテーマソングなどを制作しています。プロンプト設計をジャンル文法から詰めるのが特徴です。",
      tags: ["Suno AI", "Songwriting", "Prompt Design", "J-pop"],
      gradient: "linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%)",
      status: "Ongoing",
    },
    {
      title: "文芸創作",
      category: "Writing",
      description:
        "文芸誌の新人賞への応募を目標に、SF的な設定を軸にした中短編小説を執筆。自転が止まった地球を舞台にした約3万字の中編などを完成させています。科学的な設定考証と文体の両立を意識しています。",
      tags: ["Fiction", "SF", "文芸", "XeLaTeX"],
      gradient: "linear-gradient(135deg, #355C7D 0%, #6C5B7B 100%)",
      status: "Ongoing",
    },
    {
      title: "Korean Kanji Word Trainer",
      category: "Language Learning",
      description:
        "日本語と韓国語に共通する漢字語のつながりを利用して、韓国語の語彙を効率よく増やす学習アプリ。日本語話者がすでに持っている知識を、韓国語学習へ転用できる構成を目指しています。",
      tags: ["Korean", "EdTech", "Learning Design", "Prototype"],
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #F06595 100%)",
      status: "Prototype",
    },
  ] satisfies Work[],

  skills: [
    {
      category: "Frontend / Mobile",
      items: ["TypeScript", "React", "Next.js", "Swift / iOS", "Tailwind CSS"],
    },
    {
      category: "Backend / Infrastructure",
      items: ["Firebase Authentication", "Cloud Firestore", "Cloud Storage", "Supabase"],
    },
    {
      category: "AI / API",
      items: ["OpenAI API", "LLM Prompt Design", "ElevenLabs"],
    },
    {
      category: "Engineering",
      items: [
        "MATLAB",
        "Python (NumPy / SciPy)",
        "C++",
        "Docker / Linux",
        "Numerical Analysis",
        "Finite Element Method (Abaqus)",
      ],
    },
    {
      category: "Product / Creative",
      items: [
        "Product Planning",
        "UI / UX Design",
        "Rapid Prototyping",
        "XeLaTeX",
        "Copywriting",
        "Music Production (Suno AI)",
      ],
    },
  ] satisfies SkillGroup[],

  contact: {
    message:
      "アプリ開発、AIを活用したプロダクト、学生向けサービスに関するご相談や共同開発のご連絡をお待ちしています。",
    email: "your-email@gmail.com",
    // label を小文字にしたものが components/SocialIcon.tsx のアイコン名と対応します
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ryoda0314",
      },
      {
        label: "X",
        href: "https://x.com/RH__328",
      },
    ],
  },
} as const;

export default profile;
