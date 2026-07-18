import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.nameRomaji}
        </p>
      </div>
    </footer>
  );
}
