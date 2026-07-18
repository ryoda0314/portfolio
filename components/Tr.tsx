"use client";

import { useLocale } from "@/lib/i18n";
import type { Localized } from "@/lib/locale";

// サーバーコンポーネントの中に翻訳テキストを1箇所だけ埋め込みたいときに使う。
// 例: <Tr ja="書いたもの" en="Writing" ko="쓴 글" />
export function Tr({ ja, en, ko }: Localized) {
  const { locale } = useLocale();
  return <>{{ ja, en, ko }[locale]}</>;
}
