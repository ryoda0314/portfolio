import { profile } from "@/data/profile";
import { getAllPosts } from "@/lib/posts";
import { CommandPalette } from "./blog/CommandPalette";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Works", href: "/#works" },
  { label: "Skills", href: "/#skills" },
  { label: "Web", href: "/web" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="header-logo">
          {profile.nameRomaji}
        </a>
        <nav className="header-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <CommandPalette posts={getAllPosts()} />
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
