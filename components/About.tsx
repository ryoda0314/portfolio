import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="section-label">{profile.about.heading}</p>
          <h2 className="section-title">私について</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={100}>
            <div className="about-text">
              {profile.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="about-interests">
              <h3>Interests</h3>
              <ul className="chip-list">
                {profile.about.interests.map((interest) => (
                  <li key={interest} className="chip">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
