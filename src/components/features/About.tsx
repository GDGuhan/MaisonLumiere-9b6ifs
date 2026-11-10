import { useEffect, useRef, useState } from "react";
import aboutBg from "@/assets/about-bg.jpg";

const milestones = [
  { year: "1987", label: "Founded in Grasse, France" },
  { year: "2003", label: "First international boutique, Paris" },
  { year: "2015", label: "Awarded Grand Prix de la Parfumerie" },
  { year: "2024", label: "60+ countries worldwide" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={aboutBg} alt="Perfume atelier" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/50" />
        <div className="absolute inset-0 bg-obsidian/30" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="font-body text-xs tracking-ultra-wide uppercase text-gold">
                Our Heritage
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-6 leading-tight">
              A House Built on{" "}
              <span className="font-semibold italic text-gradient-gold">
                Obsession.
              </span>
            </h2>

            <p className="font-body text-sm text-cream-muted leading-relaxed mb-6">
              Maison Lumière was founded in 1987 by master perfumer Élise Dubois in the perfume capital of the world — Grasse, France. Trained under the great Roudnitska, Élise believed that a truly great fragrance must tell a story, evoke an emotion, and live in memory long after it fades.
            </p>
            <p className="font-body text-sm text-cream-muted leading-relaxed mb-10">
              Every formula is still handcrafted in our original atelier, using ingredients sourced through decades of trusted relationships with the world's finest growers. We refuse to compromise. We refuse to rush. We create for those who understand the difference.
            </p>

            <blockquote className="border-l-2 border-gold pl-6 mb-10">
              <p className="font-display text-xl italic text-cream leading-relaxed">
                "A great perfume is not made — it is composed, the way a symphony is. Every note must earn its place."
              </p>
              <footer className="font-body text-xs text-gold tracking-widest uppercase mt-3">
                — Élise Dubois, Founder
              </footer>
            </blockquote>

            <a
              href="/#contact"
              className="font-body text-xs tracking-widest uppercase px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 inline-block min-h-[44px] leading-none flex items-center w-fit"
            >
              Visit Our Atelier
            </a>
          </div>

          {/* Milestones */}
          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="grid grid-cols-2 gap-px bg-border/40">
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className="bg-obsidian/70 backdrop-blur-sm p-8 border border-border/40 hover:border-gold/40 transition-colors duration-300"
                >
                  <div className="font-display text-4xl font-semibold text-gradient-gold mb-2">
                    {m.year}
                  </div>
                  <div className="font-body text-sm text-cream-muted leading-relaxed">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="mt-4 p-8 bg-obsidian/70 backdrop-blur-sm border border-border/40">
              <p className="font-body text-xs tracking-widest uppercase text-gold mb-4">Recognition</p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Grand Prix de la Parfumerie",
                  "FiFi Award — Best Luxury",
                  "Duftstars Germany",
                  "FIFI UK — Niche",
                ].map((award) => (
                  <span
                    key={award}
                    className="font-body text-xs px-3 py-1.5 border border-gold/40 text-cream-muted"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
