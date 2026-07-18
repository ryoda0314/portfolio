import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Works } from "@/components/Works";
import { Skills } from "@/components/Skills";
import { BlogTeaser } from "@/components/BlogTeaser";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Works />
      <Skills />
      <BlogTeaser />
      <Contact />
    </main>
  );
}
