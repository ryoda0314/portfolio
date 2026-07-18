// ============================================================
// 多言語対応の共通型
// サイトは ja / en / ko の3言語に対応しています。
// テキストは { ja, en, ko } のオブジェクトで持ち、localize() で解決します。
// ============================================================

export type Locale = "ja" | "en" | "ko";

export const locales: Locale[] = ["ja", "en", "ko"];

export const localeLabels: Record<Locale, string> = {
  ja: "JA",
  en: "EN",
  ko: "KO",
};

/** 3言語ぶんのテキストをまとめて持つ型 */
export type Localized = {
  ja: string;
  en: string;
  ko: string;
};

export function isLocale(value: unknown): value is Locale {
  return value === "ja" || value === "en" || value === "ko";
}

export function localize(text: Localized, locale: Locale): string {
  return text[locale];
}
