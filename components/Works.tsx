import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Works() {
  return (
    <section className="section" id="works">
      <div className="container">
        <Reveal>
          <p className="section-label">Works</p>
          <h2 className="section-title">つくったもの</h2>
        </Reveal>
        <div className="works-grid">
          {profile.works.map((work, i) => {
            const card = (
              <>
                <div
                  className="work-thumb"
                  style={{ background: work.gradient }}
                >
                  {work.status && (
                    <span className="work-status">{work.status}</span>
                  )}
                </div>
                <div className="work-body">
                  <p className="work-category">{work.category}</p>
                  <h3 className="work-title">{work.title}</h3>
                  <p className="work-desc">{work.description}</p>
                  <ul className="work-tags">
                    {work.tags.map((tag) => (
                      <li key={tag} className="work-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            );
            return (
              <Reveal key={work.title} delay={(i % 3) * 100}>
                {work.href ? (
                  <a
                    href={work.href}
                    className="work-card work-card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card}
                  </a>
                ) : (
                  <div className="work-card">{card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <a href="/lp" className="all-posts-link">
            LP・Web制作の作品集も見る →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
