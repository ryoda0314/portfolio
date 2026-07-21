import { localize, type Locale, type Localized } from "@/lib/locale";

// ============================================================
// プロフィールデータ(日本語 / English / 한국어)
// このファイルの内容を書き換えるだけでサイト全体に反映されます。
// テキストは l("日本語", "English", "한국어") の順で3言語ぶん書きます。
// ============================================================

const l = (ja: string, en: string, ko: string): Localized => ({ ja, en, ko });

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

export type Profile = {
  nameRomaji: string;
  nameLocal: string;
  role: string;
  tagline: string;
  intro: string;
  about: {
    heading: string;
    body: string[];
    interests: string[];
  };
  works: Work[];
  skills: SkillGroup[];
  contact: {
    message: string;
    email: string;
    links: { label: string; href: string }[];
  };
};

const nameRomaji = "Ryo Tsukamoto";

const nameLocal = l("塚本 諒", "Ryo Tsukamoto", "Ryo Tsukamoto");

const role = "Engineering Student / App Developer";

const tagline = l(
  "アプリも、音楽も、小説も。手を動かして形にする。",
  "Apps, music, fiction — I make things with my own hands.",
  "앱도, 음악도, 소설도. 손을 움직여 형태로 만듭니다."
);

const intro = l(
  "東京科学大学で機械工学を学びながら、iOSアプリの個人開発と、AIを活用したプロダクトづくりに取り組んでいます。企画からUI設計、実装、リリース、改善までを一人で回すことが得意です。",
  "I study mechanical engineering at Institute of Science Tokyo while building iOS apps as an indie developer and creating AI-powered products. I'm at my best running the whole cycle solo — planning, UI design, implementation, release, and iteration.",
  "도쿄과학대학에서 기계공학을 공부하면서 iOS 앱 개인 개발과 AI를 활용한 프로덕트 만들기에 힘쓰고 있습니다. 기획부터 UI 설계, 구현, 출시, 개선까지 혼자서 해내는 것이 강점입니다."
);

const about = {
  heading: "About",
  body: [
    l(
      "機械工学を専攻する大学生です。個人開発では、学内向けアプリ2本をApp Storeでリリースしました。",
      "I'm a university student majoring in mechanical engineering. As an indie developer, I've released two campus apps on the App Store.",
      "기계공학을 전공하는 대학생입니다. 개인 개발로는 교내용 앱 2개를 App Store에 출시했습니다."
    ),
    l(
      "思いついた機能を作るだけでなく、実際に使われる形まで落とし込むことを大切にしています。ユーザーの反応を見ながら、機能、導線、文章、ビジュアルを継続的に改善しています。",
      "I care about going beyond building features that sound fun — shaping them into something people actually use. Watching how users respond, I keep refining features, flows, copy, and visuals.",
      "떠오른 기능을 만드는 데서 그치지 않고, 실제로 쓰이는 형태까지 다듬는 것을 중요하게 생각합니다. 사용자의 반응을 보면서 기능, 동선, 문구, 비주얼을 꾸준히 개선하고 있습니다."
    ),
    l(
      "技術の軸はWeb・モバイル(TypeScript/Swift)。加えて、AIによる音楽制作や小説執筆など、創作活動にも力を入れています。",
      "My technical home is web and mobile (TypeScript / Swift). Beyond code, I'm also active in creative work — AI-assisted music production and fiction writing.",
      "기술의 축은 웹과 모바일(TypeScript/Swift)입니다. 여기에 더해 AI 음악 제작과 소설 집필 등 창작 활동에도 힘을 쏟고 있습니다."
    ),
  ],
  interests: [
    l("AIを活用したプロダクト開発", "AI-powered product development", "AI를 활용한 프로덕트 개발"),
    l("Web・モバイルアプリ", "Web & mobile apps", "웹·모바일 앱"),
    l("UI / UXデザイン", "UI / UX design", "UI / UX 디자인"),
    l("音楽制作(AI作曲)", "Music production (AI composition)", "음악 제작 (AI 작곡)"),
    l("文芸創作", "Fiction writing", "문예 창작"),
    l("語学学習(韓国語)", "Language learning (Korean)", "어학 학습 (한국어)"),
  ],
};

type WorkSource = Omit<Work, "title" | "description"> & {
  title: Localized;
  description: Localized;
};

const works: WorkSource[] = [
  {
    title: l("ScienceTokyo App", "ScienceTokyo App", "ScienceTokyo App"),
    category: "Campus App",
    description: l(
      "東京科学大学での学生生活を、ひとつのアプリにまとめるプロジェクト。時間割、履修登録、学内マップ、LMS連携など、日常的に使う機能を横断的に設計・改善しています。企画からリリース、運用まで個人で担当。",
      "A project that brings student life at Institute of Science Tokyo into a single app. I design and iterate on the features students use every day — timetable, course registration, campus map, LMS integration — handling everything from planning to release and operations on my own.",
      "도쿄과학대학의 학생 생활을 하나의 앱에 담는 프로젝트. 시간표, 수강 신청, 캠퍼스 지도, LMS 연동 등 일상적으로 쓰는 기능을 아울러 설계·개선하고 있습니다. 기획부터 출시, 운영까지 혼자 담당합니다."
    ),
    tags: ["iOS", "Product Design", "UI / UX", "Community"],
    gradient: "linear-gradient(135deg, #5B67F1 0%, #8A5CF6 100%)",
    href: "https://apps.apple.com/jp/app/id6761738741",
    status: "Released",
  },
  {
    title: l("TextNext", "TextNext", "TextNext"),
    category: "Marketplace App",
    description: l(
      "大学の教科書を学生同士で売買できるP2Pマーケットプレイス。必要な教科書へ短い導線で到達できることを重視し、検索から取引までの体験を設計しました。",
      "A peer-to-peer marketplace where students buy and sell university textbooks. I designed the experience from search to transaction, focused on reaching the textbook you need in as few steps as possible.",
      "대학 교과서를 학생끼리 사고팔 수 있는 P2P 마켓플레이스. 필요한 교과서에 짧은 동선으로 도달하는 것을 중시해 검색부터 거래까지의 경험을 설계했습니다."
    ),
    tags: ["iOS", "Next.js", "TypeScript", "Marketplace"],
    gradient: "linear-gradient(135deg, #159957 0%, #155799 100%)",
    href: "https://apps.apple.com/jp/app/id6779549997",
    status: "Released",
  },
  {
    title: l("PolyLinga", "PolyLinga", "PolyLinga"),
    category: "AI Learning Platform",
    description: l(
      "AIを軸にした多言語学習アプリ。GPT-4によるトークン化、AI添削、Whisperを使った発音評価、TTS音声再生、間隔反復学習(SRS)やレベル・ストリークなどのゲーミフィケーションを備え、Web(PWA)とiOSの両方で動作します。",
      "An AI-centered language learning app. It features GPT-4 tokenization, AI writing feedback, pronunciation scoring with Whisper, TTS playback, spaced repetition (SRS), and gamification such as levels and streaks — running on both web (PWA) and iOS.",
      "AI를 축으로 한 다국어 학습 앱. GPT-4 토큰화, AI 첨삭, Whisper를 활용한 발음 평가, TTS 음성 재생, 간격 반복 학습(SRS)과 레벨·스트릭 같은 게이미피케이션을 갖추고 웹(PWA)과 iOS에서 모두 동작합니다."
    ),
    tags: ["Next.js", "Supabase", "OpenAI API", "PWA / Capacitor"],
    gradient: "linear-gradient(135deg, #FF8008 0%, #FFC837 100%)",
    status: "Ongoing",
  },
  {
    title: l("Remote Input", "Remote Input", "Remote Input"),
    category: "Utility / System",
    description: l(
      "iPhoneをPCの入力デバイスに変えるシステム。縦画面では標準キーボードのフリック入力でPCへ日本語入力、横画面ではトラックパッドとして操作できます。PWAとPython製エージェントがWebSocketで通信し、ペアリング認証を経てOSに入力を注入します。",
      "A system that turns an iPhone into an input device for a PC. In portrait, it types Japanese into the PC via the standard flick keyboard; in landscape, it works as a trackpad. A PWA and a Python agent talk over WebSocket, injecting input into the OS after pairing authentication.",
      "iPhone을 PC의 입력 장치로 바꾸는 시스템. 세로 화면에서는 기본 키보드의 플릭 입력으로 PC에 일본어를 입력하고, 가로 화면에서는 트랙패드로 조작할 수 있습니다. PWA와 Python 에이전트가 WebSocket으로 통신하며, 페어링 인증을 거쳐 OS에 입력을 주입합니다."
    ),
    tags: ["PWA", "WebSocket", "Python"],
    gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    status: "Ongoing",
  },
  {
    title: l("AI音楽制作", "AI Music Production", "AI 음악 제작"),
    category: "Music / Creative",
    description: l(
      "生成AIを用いた楽曲制作。J-pop、アイドル、アートロックなど幅広いジャンルのスタイル設計と作詞を行い、学園祭コンテストへの応募曲や、自作アプリのテーマソングなどを制作しています。プロンプト設計をジャンル文法から詰めるのが特徴です。",
      "Songwriting with generative AI. I design styles and write lyrics across genres — J-pop, idol, art rock — producing entries for campus festival contests and theme songs for my own apps. My signature is building prompts up from the grammar of each genre.",
      "생성형 AI를 활용한 곡 제작. J-pop, 아이돌, 아트록 등 폭넓은 장르의 스타일 설계와 작사를 하며, 학교 축제 콘테스트 응모곡과 자작 앱의 테마송 등을 만들고 있습니다. 장르 문법에서부터 프롬프트를 설계하는 것이 특징입니다."
    ),
    tags: ["Suno AI", "Songwriting", "Prompt Design", "J-pop"],
    gradient: "linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%)",
    status: "Ongoing",
  },
  {
    title: l("文芸創作", "Fiction Writing", "문예 창작"),
    category: "Writing",
    description: l(
      "文芸誌の新人賞への応募を目標に、SF的な設定を軸にした中短編小説を執筆。自転が止まった地球を舞台にした約3万字の中編などを完成させています。科学的な設定考証と文体の両立を意識しています。",
      "I write novellas and short stories built on science-fiction premises, aiming for literary magazine newcomer awards. Finished work includes a novella of about 30,000 characters set on an Earth whose rotation has stopped. I try to hold rigorous world-building and prose style together.",
      "문예지 신인상 응모를 목표로 SF적 설정을 축으로 한 중·단편 소설을 집필하고 있습니다. 자전이 멈춘 지구를 무대로 한 약 3만 자 분량의 중편 등을 완성했습니다. 과학적 설정 고증과 문체의 양립을 의식하고 있습니다."
    ),
    tags: ["Fiction", "SF", "文芸", "XeLaTeX"],
    gradient: "linear-gradient(135deg, #355C7D 0%, #6C5B7B 100%)",
    status: "Ongoing",
  },
  {
    title: l(
      "Korean Kanji Word Trainer",
      "Korean Kanji Word Trainer",
      "Korean Kanji Word Trainer"
    ),
    category: "Language Learning",
    description: l(
      "日本語と韓国語に共通する漢字語のつながりを利用して、韓国語の語彙を効率よく増やす学習アプリ。日本語話者がすでに持っている知識を、韓国語学習へ転用できる構成を目指しています。",
      "A learning app that grows Korean vocabulary efficiently through the Sino-vocabulary shared by Japanese and Korean. It aims to let Japanese speakers transfer knowledge they already have straight into learning Korean.",
      "일본어와 한국어에 공통되는 한자어의 연결을 활용해 한국어 어휘를 효율적으로 늘리는 학습 앱. 일본어 화자가 이미 가진 지식을 한국어 학습에 활용할 수 있는 구성을 목표로 합니다."
    ),
    tags: ["Korean", "EdTech", "Learning Design", "Prototype"],
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #F06595 100%)",
    status: "Prototype",
  },
];

const skills: SkillGroup[] = [
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
];

const contact = {
  message: l(
    "アプリ開発、AIを活用したプロダクト、学生向けサービスに関するご相談や共同開発のご連絡をお待ちしています。",
    "I'd love to hear from you about app development, AI-powered products, services for students — or working on something together.",
    "앱 개발, AI를 활용한 프로덕트, 학생 대상 서비스에 관한 상담이나 공동 개발 제안을 기다리고 있습니다."
  ),
  email: "ryo.tsukamoto24@gmail.com",
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
};

export function getProfile(locale: Locale): Profile {
  return {
    nameRomaji,
    nameLocal: localize(nameLocal, locale),
    role,
    tagline: localize(tagline, locale),
    intro: localize(intro, locale),
    about: {
      heading: about.heading,
      body: about.body.map((p) => localize(p, locale)),
      interests: about.interests.map((i) => localize(i, locale)),
    },
    works: works.map((w) => ({
      ...w,
      title: localize(w.title, locale),
      description: localize(w.description, locale),
    })),
    skills,
    contact: {
      ...contact,
      message: localize(contact.message, locale),
    },
  };
}

// メタデータなどサーバー側で使う既定値(日本語)
export const profile = getProfile("ja");

export default profile;
