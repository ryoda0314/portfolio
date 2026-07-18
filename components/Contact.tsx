"use client";

import { getProfile } from "@/data/profile";
import { useLocale } from "@/lib/i18n";
import { ui } from "@/lib/ui";
import { Reveal } from "./Reveal";
import { SocialIcon } from "./SocialIcon";

export function Contact() {
  const { locale } = useLocale();
  const profile = getProfile(locale);
  const t = ui[locale];
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="section-title">{t.contactTitle}</h2>
          <p className="contact-message">{profile.contact.message}</p>
          <a
            href={`mailto:${profile.contact.email}`}
            className="contact-email"
          >
            {profile.contact.email}
          </a>
          <ul className="social-list">
            {profile.contact.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon name={link.label.toLowerCase()} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
