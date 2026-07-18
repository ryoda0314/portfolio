"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { isLocale, type Locale } from "./locale";

// ============================================================
// 言語切り替えの仕組み(クライアントサイド)
// - 選択は localStorage("site-locale") に保存
// - 初回訪問時はブラウザの言語設定から自動判定
// - <html lang> も選択に合わせて更新
// ============================================================

const STORAGE_KEY = "site-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "ja",
  setLocale: () => {},
});

function detectInitialLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) return stored;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("ko")) return "ko";
  return "ja";
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // SSRでは常に ja でレンダリングし、マウント後に保存済みの言語へ切り替える
  const [locale, setLocaleState] = useState<Locale>("ja");

  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
