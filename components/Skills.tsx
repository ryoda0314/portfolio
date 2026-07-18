"use client";

import { getProfile } from "@/data/profile";
import { useLocale } from "@/lib/i18n";
import { ui } from "@/lib/ui";
import { Reveal } from "./Reveal";

export function Skills() {
  const { locale } = useLocale();
  const profile = getProfile(locale);
  const t = ui[locale];
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">{t.skillsTitle}</h2>
        </Reveal>
        <div className="skills-grid">
          {profile.skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 100}>
              <div className="skill-group">
                <h3 className="skill-category">{group.category}</h3>
                <ul className="skill-items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
