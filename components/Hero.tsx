"use client";

import { getProfile } from "@/data/profile";
import { useLocale } from "@/lib/i18n";
import { ui } from "@/lib/ui";

export function Hero() {
  const { locale } = useLocale();
  const profile = getProfile(locale);
  const t = ui[locale];
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="container hero-content">
        <p className="hero-role">{profile.role}</p>
        <h1 className="hero-name">{profile.nameRomaji}</h1>
        {profile.nameLocal !== profile.nameRomaji && (
          <p className="hero-name-ja">{profile.nameLocal}</p>
        )}
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a href="#works" className="btn btn-primary">
            {t.viewWorks}
          </a>
          <a href="#contact" className="btn btn-ghost">
            {t.contactMe}
          </a>
        </div>
      </div>
      <span className="hero-scroll" aria-hidden="true">
        scroll
      </span>
    </section>
  );
}
