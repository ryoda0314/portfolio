"use client";

import { getLpWorks } from "@/data/lpWorks";
import { useLocale } from "@/lib/i18n";
import { ui } from "@/lib/ui";

export function LpGallery() {
  const { locale } = useLocale();
  const lpWorks = getLpWorks(locale);
  const t = ui[locale];
  return (
    <div className="page container">
      <p className="section-label">LP Works</p>
      <h1 className="section-title">{t.lpPageTitle}</h1>
      <p className="lp-lead">{t.lpPageLead}</p>
      {lpWorks.map((group) => (
        <section key={group.category} className="lp-group">
          <h2 className="lp-group-title">{group.category}</h2>
          <div className="works-grid">
            {group.works.map((w) => (
              <div key={w.slug} className="work-card">
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lp-thumb-link"
                >
                  <div className="work-thumb lp-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={w.thumb}
                      alt={`${w.title}${t.lpScreenshotAlt}`}
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="work-body">
                  <h3 className="work-title">
                    <a href={w.url} target="_blank" rel="noopener noreferrer">
                      {w.title}
                    </a>
                  </h3>
                  <p className="work-desc">{w.description}</p>
                  {w.variants && (
                    <ul className="lp-variants">
                      {w.variants.map((v) => (
                        <li key={v.url}>
                          <a
                            href={v.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {v.label} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
