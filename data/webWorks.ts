import { localize, type Locale, type Localized } from "@/lib/locale";

// ============================================================
// Web制作(サイト・LP)の作品集データ(日本語 / English / 한국어)
// 実物は public/web/<slug>/ に置かれ、サムネイルは public/web-thumbs/<slug>.jpg
// テキストは l("日本語", "English", "한국어") の順で3言語ぶん書きます。
// ============================================================

const l = (ja: string, en: string, ko: string): Localized => ({ ja, en, ko });

export type WebWork = {
  slug: string;
  title: string;
  description: string;
  url: string;
  thumb: string;
  variants?: { label: string; url: string }[];
};

export type WebCategory = {
  category: string;
  works: WebWork[];
};

type WebWorkSource = Omit<WebWork, "title" | "description"> & {
  title: Localized;
  description: Localized;
};

type WebCategorySource = {
  category: Localized;
  works: WebWorkSource[];
};

function work(
  slug: string,
  title: Localized,
  description: Localized,
  variants?: { label: string; url: string }[],
  opts?: { url?: string }
): WebWorkSource {
  return {
    slug,
    title,
    description,
    url: opts?.url ?? `/web/${slug}/index.html`,
    thumb: `/web-thumbs/${slug}.jpg`,
    variants,
  };
}

const source: WebCategorySource[] = [
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
        "geisai",
        l("藝祭 2026「キャンバス」", "Geisai 2026 “Canvas”", "게이사이 2026 「캔버스」"),
        l(
          "みなと芸術大学 第58回藝祭。美大らしく「余白がキャンバスになる」レイアウトを意識。",
          "Minato University of the Arts' 58th art festival. A layout where — fittingly for an art school — the white space becomes the canvas.",
          "미나토예술대학 제58회 예술제. 미대답게 '여백이 캔버스가 되는' 레이아웃을 의식했습니다."
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
    ],
  },
  {
    category: l("アーティスト公式サイト", "Artist Official Sites", "아티스트 공식 사이트"),
    works: [
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
        l(
          "株式会社アクシスワークス(Standard)",
          "Axis Works Inc. (Standard)",
          "주식회사 액시스웍스 (Standard)"
        ),
        l(
          "DXコンサル企業のコーポレートLP。同じ内容を4段階のデザイン強度で作り分けた比較シリーズの基準版。",
          "Corporate landing page for a DX consulting firm — the baseline of a series that builds the same content at four levels of design intensity.",
          "DX 컨설팅 기업의 코퍼레이트 LP. 같은 내용을 4단계 디자인 강도로 만든 비교 시리즈의 기준판."
        )
      ),
      work(
        "axis-works-premium",
        l(
          "株式会社アクシスワークス(Premium)",
          "Axis Works Inc. (Premium)",
          "주식회사 액시스웍스 (Premium)"
        ),
        l(
          "ビジュアルと余白の設計を一段引き上げたPremium版。",
          "The Premium tier, stepping up the visuals and the use of white space.",
          "비주얼과 여백 설계를 한 단계 끌어올린 Premium판."
        ),
        undefined,
        { url: "/web/axis-works/premium.html" }
      ),
      work(
        "axis-works-flagship",
        l(
          "株式会社アクシスワークス(Flagship)",
          "Axis Works Inc. (Flagship)",
          "주식회사 액시스웍스 (Flagship)"
        ),
        l(
          "動きと演出を大胆に取り入れたFlagship版。",
          "The Flagship tier, boldly adding motion and staging.",
          "모션과 연출을 과감하게 도입한 Flagship판."
        ),
        undefined,
        { url: "/web/axis-works/flagship.html" }
      ),
      work(
        "axis-works-cinematic",
        l(
          "株式会社アクシスワークス(Flagship Cinematic)",
          "Axis Works Inc. (Flagship Cinematic)",
          "주식회사 액시스웍스 (Flagship Cinematic)"
        ),
        l(
          "映像的な没入感まで振り切ったFlagship Cinematic版。",
          "The Flagship Cinematic tier, pushed all the way to film-like immersion.",
          "영상적인 몰입감까지 밀어붙인 Flagship Cinematic판."
        ),
        undefined,
        { url: "/web/axis-works/flagship-cinematic.html" }
      ),
    ],
  },
];

export function getWebWorks(locale: Locale): WebCategory[] {
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
export const webWorks = getWebWorks("ja");
