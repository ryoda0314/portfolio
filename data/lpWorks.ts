// ============================================================
// LP・Web制作の作品集データ
// 実物は public/lp/<slug>/ に置かれ、サムネイルは public/lp-thumbs/<slug>.jpg
// ============================================================

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

function work(
  slug: string,
  title: string,
  description: string,
  variants?: { label: string; url: string }[]
): LpWork {
  return {
    slug,
    title,
    description,
    url: `/lp/${slug}/index.html`,
    thumb: `/lp-thumbs/${slug}.jpg`,
    variants,
  };
}

export const lpWorks: LpCategory[] = [
  {
    category: "学園祭・イベント",
    works: [
      work(
        "soyogu",
        "青葉祭 2026「そよぐ」",
        "青葉台大学 第74回学園祭の公式サイト。テーマ「そよぐ」に合わせた、風と若葉のやわらかなトーン。"
      ),
      work(
        "festival",
        "星海祭 2026「無限彩 -INFINITE COLORS-」",
        "星海大学 第48回学園祭。夜空と色彩をテーマにした、グラデーション基調のビジュアル。"
      ),
      work(
        "geisai",
        "藝祭 2026「キャンバス」",
        "みなと芸術大学 第58回藝祭。美大らしく「余白がキャンバスになる」レイアウトを意識。"
      ),
      work(
        "michikusa",
        "北辰祭 2026「みちくさ」",
        "北辰大学 第56回学園祭。寄り道をテーマに、歩くように読み進められる構成。"
      ),
      work(
        "tomoshibi",
        "燈祭 2026「ともしび」",
        "北嶺工科大学 第39回学園祭。夜の学園祭を灯りで表現した、ダークトーンのデザイン。"
      ),
      work(
        "tanabata",
        "星川町 七夕まつり 2026",
        "第38回 七夕まつり公式サイト。「願いを、空へ。」天の川と短冊のモチーフで構成。"
      ),
    ],
  },
  {
    category: "プロダクト",
    works: [
      work(
        "hinata",
        "陽向 HINATA",
        "太陽の一日を室内に再現するサーカディアン照明のLP。時間帯で変わる光をスクロールで体験。"
      ),
      work(
        "product",
        "IZUMI Bottle 480",
        "真空二重構造ステンレスボトルのLP。スペックの伝え方と質感表現を重視。"
      ),
    ],
  },
  {
    category: "アーティスト公式サイト",
    works: [
      work(
        "stellarion",
        "STELLARION Official Site",
        "7人組アイドルグループの公式サイト。NEWS・MEMBER・DISCOGRAPHY・LIVE・FCまでフル構成。",
        [
          { label: "Atlas ver.", url: "/lp/stellarion/atlas.html" },
          { label: "Kawaii Pop ver.", url: "/lp/stellarion/kawaii-pop.html" },
        ]
      ),
      work(
        "yoimachi",
        "テンキヨホー! Official Site",
        "お天気アイドルグループの公式サイト。メンバー・ライブ・グッズ・ファンクラブ案内まで。"
      ),
    ],
  },
  {
    category: "コーポレート",
    works: [
      work(
        "axis-works",
        "株式会社アクシスワークス",
        "DXコンサル企業のコーポレートLP。同じ内容を4段階のデザイン強度で作り分けた比較シリーズ。",
        [
          { label: "Premium", url: "/lp/axis-works/premium.html" },
          { label: "Flagship", url: "/lp/axis-works/flagship.html" },
          { label: "Cinematic", url: "/lp/axis-works/flagship-cinematic.html" },
        ]
      ),
    ],
  },
  {
    category: "実験・アート",
    works: [
      work(
        "a-day",
        "光の一日 — A DAY IN LIGHT",
        "スクロールすると一日の時間が流れる、光と色のスクロールテリング実験。"
      ),
      work(
        "portfolio",
        "Portfolio 2026 (Alt Design)",
        "このサイトとは別アプローチで作ったポートフォリオ。DESIGN × CODE がテーマ。"
      ),
    ],
  },
];
