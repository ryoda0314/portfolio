import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="container hero-content">
        <p className="hero-role">{profile.role}</p>
        <h1 className="hero-name">{profile.nameRomaji}</h1>
        <p className="hero-name-ja">{profile.nameJa}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a href="#works" className="btn btn-primary">
            作品を見る
          </a>
          <a href="#contact" className="btn btn-ghost">
            連絡する
          </a>
        </div>
      </div>
      <span className="hero-scroll" aria-hidden="true">
        scroll
      </span>
    </section>
  );
}
