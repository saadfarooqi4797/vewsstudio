import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VEWS Studio — Visuals that stop the scroll" },
      { name: "description", content: "VEWS Studio is a creative content studio for video editing, graphic design, AI videos and social media. Artful content for brands that want to stand out." },
      { property: "og:title", content: "VEWS Studio — Creative content that gets remembered" },
      { property: "og:description", content: "A creative studio for bold stories and visual chaos." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
