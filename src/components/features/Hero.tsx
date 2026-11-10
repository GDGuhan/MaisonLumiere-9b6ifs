import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-perfume.jpg";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Maison Lumière luxury perfume"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
      </div>

      {/* Gold line accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="font-body text-xs tracking-ultra-wide uppercase text-gold">
                Maison Lumière · Est. 1987
              </span>
            </div>
          </div>

          {/* Headline */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-light leading-none text-cream mb-2">
              The Art
            </h1>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-semibold leading-none text-gradient-gold mb-8">
              of Scent.
            </h1>
          </div>

          {/* Subheadline */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-body text-base md:text-lg text-cream-muted leading-relaxed max-w-md mb-12">
              Each fragrance is a handcrafted narrative — built from the world's rarest botanicals, aged resins, and precious absolutes by our master perfumers in Grasse.
            </p>
          </div>

          {/* CTAs */}
          <div
            className={`transition-all duration-700 delay-500 flex flex-wrap gap-4 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="/collection"
              className="font-body text-xs tracking-widest uppercase px-10 py-4 gradient-gold text-obsidian font-semibold hover:opacity-90 transition-opacity duration-300 min-h-[44px] flex items-center"
            >
              Explore Collection
            </a>
            <a
              href="/#story"
              className="font-body text-xs tracking-widest uppercase px-10 py-4 border border-cream/30 text-cream hover:border-gold hover:text-gold transition-all duration-300 min-h-[44px] flex items-center"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-muted animate-bounce">
        <ArrowDown size={16} />
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
      </div>

      {/* Stats Strip */}
      <div
        className={`absolute bottom-0 right-0 hidden lg:flex transition-all duration-700 delay-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex divide-x divide-border bg-obsidian/80 backdrop-blur-sm border-l border-t border-border">
          {[
            { value: "37+", label: "Years of Mastery" },
            { value: "4", label: "Scent Families" },
            { value: "60+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="px-8 py-5 text-center">
              <div className="font-display text-2xl text-gold font-semibold">{stat.value}</div>
              <div className="font-body text-xs text-cream-muted tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
