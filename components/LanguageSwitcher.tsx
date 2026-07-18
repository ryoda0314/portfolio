"use client";

import { useLocale } from "@/lib/i18n";
import { localeLabels, locales } from "@/lib/locale";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-switch-btn${l === locale ? " active" : ""}`}
          aria-pressed={l === locale}
          onClick={() => setLocale(l)}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
