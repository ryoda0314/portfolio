import { localize, type Locale, type Localized } from "@/lib/locale";

// ============================================================
// LP・Web制作の作品集データ(日本語 / English / 한국어)
// 実物は public/lp/<slug>/ に置かれ、サムネイルは public/lp-thumbs/<slug>.jpg
// テキストは l("日本語", "English", "한국어") の順で3言語ぶん書きます。
// ============================================================

const l = (ja: string, en: string, ko: string): Localized => ({ ja, en, ko });

export type LpWork = {
  slug: string;
  title: string;
  description: string;
  url: string;
  thumb: string;
  variants?: { label: string; url: string }[];
};

export type LpCategory = {
  category: string;
  works: LpWork[];
};

type LpWorkSource = Omit<LpWork, "title" | "description"> & {
  title: Localized;
  description: Localized;
};

type LpCategorySource = {
  category: Localized;
  works: LpWorkSource[];
};

function work(
  slug: string,
  title: Localized,
  description: Localized,
  variants?: { label: string; url: string }[]
): LpWorkSource {
  return {
    slug,
    title,
    description,
    url: `/lp/${slug}/index.html`,
    thumb: `/lp-thumbs/${slug}.jpg`,
    variants,
  };
}

const source: LpCategorySource[] = [
  {
    category: l("学園祭・イベント", "Campus Festivals & Events", "학교 축제·이벤트"),
    works: [
      work(
        "soyogu",
        l("青葉祭 2026「そよぐ」", "Aoba-sai 2026 “Soyogu”", "아오바사이 2026 「소요구」"),
        l(
          "青葉台大学 第74回学園祭の公式サイト。テーマ「そよぐ」に合わせた、風と若葉のやわらかなトーン。",
          "Official site for Aobadai University's 74th campus festival. Soft tones of wind and young leaves to match the theme “Soyogu” (rustling).",
          "아오바다이대학 제74회 학교 축제 공식 사이트. 테마 '소요구(살랑임)'에 맞춘 바람과 새잎의 부드러운 톤."
        )
      ),
      work(
        "festival",
        l(
          "星海祭 2026「無限彩 -INFINITE COLORS-」",
          "Seikai-sai 2026 “INFINITE COLORS”",
          "세이카이사이 2026 「무한채 -INFINITE COLORS-」"
        ),
        l(
          "星海大学 第48回学園祭。夜空と色彩をテーマにした、グラデーション基調のビジュアル。",
          "Seikai University's 48th campus festival. Gradient-driven visuals themed around the night sky and color.",
          "세이카이대학 제48회 학교 축제. 밤하늘과 색채를 테마로 한 그러데이션 기조의 비주얼."
        )
      ),
      work(
        "geisai",
        l("藝祭 2026「キャンバス」", "Geisai 2026 “Canvas”", "게이사이 2026 「캔버스」"),
        l(
          "みなと芸術大学 第58回藝祭。美大らしく「余白がキャンバスになる」レイアウトを意識。",
          "Minato University of the Arts' 58th art festival. A layout where — fittingly for an art school — the white space becomes the canvas.",
          "미나토예술대학 제58회 예술제. 미대답게 '여백이 캔버스가 되는' 레이아웃을 의식했습니다."
        )
      ),
      work(
        "michikusa",
        l("北辰祭 2026「みちくさ」", "Hokushin-sai 2026 “Michikusa”", "호쿠신사이 2026 「미치쿠사」"),
        l(
          "北辰大学 第56回学園祭。寄り道をテーマに、歩くように読み進められる構成。",
          "Hokushin University's 56th campus festival. Themed on taking detours — a page you read at a strolling pace.",
          "호쿠신대학 제56회 학교 축제. '샛길'을 테마로, 걷듯이 읽어 나가는 구성."
        )
      ),
      work(
        "tomoshibi",
        l("燈祭 2026「ともしび」", "Light Festival 2026 “Tomoshibi”", "등불 축제 2026 「토모시비」"),
        l(
          "北嶺工科大学 第39回学園祭。夜の学園祭を灯りで表現した、ダークトーンのデザイン。",
          "Hokurei Institute of Technology's 39th campus festival. A dark-toned design that renders the festival night in lamplight.",
          "호쿠레이공과대학 제39회 학교 축제. 밤의 축제를 등불로 표현한 다크 톤 디자인."
        )
      ),
      work(
        "tanabata",
        l("星川町 七夕まつり 2026", "Hoshikawa Tanabata Festival 2026", "호시카와초 칠석 축제 2026"),
        l(
          "第38回 七夕まつり公式サイト。「願いを、空へ。」天の川と短冊のモチーフで構成。",
          "Official site for the 38th Tanabata festival. “Wishes, up to the sky” — built on Milky Way and wishing-strip motifs.",
          "제38회 칠석 축제 공식 사이트. '소원을 하늘로.' 은하수와 소원 종이(단자쿠) 모티프로 구성."
        )
      ),
    ],
  },
  {
    category: l("プロダクト", "Products", "프로덕트"),
    works: [
      work(
        "hinata",
        l("陽向 HINATA", "HINATA", "히나타 HINATA"),
        l(
          "太陽の一日を室内に再現するサーカディアン照明のLP。時間帯で変わる光をスクロールで体験。",
          "Landing page for a circadian lamp that recreates the sun's day indoors. Scroll through light that shifts with the time of day.",
          "태양의 하루를 실내에 재현하는 서캐디언 조명 LP. 시간대에 따라 변하는 빛을 스크롤로 체험."
        )
      ),
      work(
        "product",
        l("IZUMI Bottle 480", "IZUMI Bottle 480", "IZUMI Bottle 480"),
        l(
          "真空二重構造ステンレスボトルのLP。スペックの伝え方と質感表現を重視。",
          "Landing page for a vacuum-insulated stainless bottle, focused on how specs are communicated and how texture is expressed.",
          "진공 이중 구조 스테인리스 보틀 LP. 스펙 전달 방식과 질감 표현을 중시."
        )
      ),
    ],
  },
  {
    category: l("アーティスト公式サイト", "Artist Official Sites", "아티스트 공식 사이트"),
    works: [
      work(
        "stellarion",
        l("STELLARION Official Site", "STELLARION Official Site", "STELLARION Official Site"),
        l(
          "7人組アイドルグループの公式サイト。NEWS・MEMBER・DISCOGRAPHY・LIVE・FCまでフル構成。",
          "Official site for a seven-member idol group — a full build with NEWS, MEMBER, DISCOGRAPHY, LIVE, and fan club sections.",
          "7인조 아이돌 그룹 공식 사이트. NEWS·MEMBER·DISCOGRAPHY·LIVE·팬클럽까지 풀 구성."
        ),
        [
          { label: "Atlas ver.", url: "/lp/stellarion/atlas.html" },
          { label: "Kawaii Pop ver.", url: "/lp/stellarion/kawaii-pop.html" },
        ]
      ),
      work(
        "yoimachi",
        l("テンキヨホー! Official Site", "Tenki-Yohō! Official Site", "텐키요호! Official Site"),
        l(
          "お天気アイドルグループの公式サイト。トップに加えて、チケット・グッズ通販・ファンクラブ入会/マイページ・動画/音楽コンテンツ・初心者ガイドまで、全13ページのマルチページ構成。",
          "Official site for a weather-themed idol group. Beyond the top page, it's a full thirteen-page build — ticketing, merch store, fan club sign-up and member page, video and music content, and a beginner's guide.",
          "날씨 아이돌 그룹의 공식 사이트. 메인 페이지에 더해 티켓, 굿즈 스토어, 팬클럽 가입/마이페이지, 영상·음악 콘텐츠, 입문 가이드까지 총 13페이지의 멀티 페이지 구성."
        )
      ),
    ],
  },
  {
    category: l("コーポレート", "Corporate", "기업"),
    works: [
      work(
        "axis-works",
        l("株式会社アクシスワークス", "Axis Works Inc.", "주식회사 액시스웍스"),
        l(
          "DXコンサル企業のコーポレートLP。同じ内容を4段階のデザイン強度で作り分けた比較シリーズ。",
          "Corporate landing page for a DX consulting firm — a comparison series building the same content at four levels of design intensity.",
          "DX 컨설팅 기업의 코퍼레이트 LP. 같은 내용을 4단계 디자인 강도로 만들어 비교한 시리즈."
        ),
        [
          { label: "Premium", url: "/lp/axis-works/premium.html" },
          { label: "Flagship", url: "/lp/axis-works/flagship.html" },
          { label: "Cinematic", url: "/lp/axis-works/flagship-cinematic.html" },
        ]
      ),
    ],
  },
  {
    category: l("実験・アート", "Experiments & Art", "실험·아트"),
    works: [
      work(
        "a-day",
        l("光の一日 — A DAY IN LIGHT", "A DAY IN LIGHT", "빛의 하루 — A DAY IN LIGHT"),
        l(
          "スクロールすると一日の時間が流れる、光と色のスクロールテリング実験。",
          "A scrollytelling experiment in light and color, where a full day passes as you scroll.",
          "스크롤하면 하루의 시간이 흐르는, 빛과 색의 스크롤텔링 실험."
        )
      ),
      work(
        "portfolio",
        l("Portfolio 2026 (Alt Design)", "Portfolio 2026 (Alt Design)", "Portfolio 2026 (Alt Design)"),
        l(
          "このサイトとは別アプローチで作ったポートフォリオ。DESIGN × CODE がテーマ。",
          "A portfolio built with a different approach from this site, themed DESIGN × CODE.",
          "이 사이트와는 다른 접근으로 만든 포트폴리오. 테마는 DESIGN × CODE."
        )
      ),
    ],
  },
];

export function getLpWorks(locale: Locale): LpCategory[] {
  return source.map((group) => ({
    category: localize(group.category, locale),
    works: group.works.map((w) => ({
      ...w,
      title: localize(w.title, locale),
      description: localize(w.description, locale),
    })),
  }));
}

// 既定値(日本語)
export const lpWorks = getLpWorks("ja");
