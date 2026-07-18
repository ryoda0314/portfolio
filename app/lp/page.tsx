import type { Metadata } from "next";
import { lpWorks } from "@/data/lpWorks";

export const metadata: Metadata = {
  title: "LP作品集",
  description:
    "学園祭・イベント・プロダクト・コーポレートなど、制作したLP/Webサイトの作品集。",
};

export default function LpWorksPage() {
  return (
    <div className="page container">
      <p className="section-label">LP Works</p>
      <h1 className="section-title">LP作品集</h1>
      <p className="lp-lead">
        学園祭・イベント・プロダクト・アーティスト・コーポレートなど、テーマの異なるLP/Webサイトを1ページずつ設計から実装まで制作しています。いずれも架空の団体・製品を想定した自主制作です。カードをクリックすると実物が開きます。
      </p>
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
                    <img src={w.thumb} alt={`${w.title} のスクリーンショット`} loading="lazy" />
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
