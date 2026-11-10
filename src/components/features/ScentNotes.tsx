import { useEffect, useRef, useState } from "react";

const scentFamilies = [
  {
    name: "Floral",
    icon: "✦",
    color: "from-pink-900/40 to-obsidian",
    notes: ["Rose de Mai", "Jasmine Sambac", "Tuberose Absolute", "White Peony", "Ylang-Ylang"],
    origin: "Grasse, France · Comoros · Egypt",
    description: "Our florals are sourced from single-origin farms with whom we have cultivated relationships for over two decades.",
  },
  {
    name: "Oriental & Woody",
    icon: "◆",
    color: "from-amber-900/40 to-obsidian",
    notes: ["Cambodian Oud", "Sandalwood Mysore", "Dark Vetiver", "Patchouli", "Labdanum"],
    origin: "Cambodia · India · Haiti · Indonesia",
    description: "Ancient woods and resins extracted through traditional methods — never synthetic, never rushed.",
  },
  {
    name: "Citrus & Fresh",
    icon: "◇",
    color: "from-emerald-900/30 to-obsidian",
    notes: ["Calabrian Bergamot", "Neroli Bigarade", "Yuzu", "Pink Pepper", "Green Cardamom"],
    origin: "Calabria, Italy · Tunisia · Japan",
    description: "Cold-pressed and steam-distilled from hand-harvested fruits at their peak — bright, vivid, alive.",
  },
  {
    name: "Gourmand & Balsamic",
    icon: "❖",
    color: "from-purple-900/30 to-obsidian",
    notes: ["Tonka Bean", "Benzoin", "Tahitian Vanilla", "Ambergris", "Frankincense"],
    origin: "Venezuela · Siam · Tahiti · Norway",
    description: "Warm, enveloping, and addictive. The rarest balsamic ingredients bring depth and lasting power to every composition.",
  },
];

export default function ScentNotes() {
  const [visible, setVisible] = useState(false);
  const [activeFamily, setActiveFamily] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const active = scentFamilies[activeFamily];

  return (
    <section id="ingredients" className="py-28 bg-obsidian-light">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="font-body text-xs tracking-ultra-wide uppercase text-gold">
              The Palette
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream">
            Scent <span className="font-semibold text-gradient-gold">Families</span>
          </h2>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Family Selector */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col">
            {scentFamilies.map((family, i) => (
              <button
                key={family.name}
                onClick={() => setActiveFamily(i)}
                className={`flex-1 lg:flex-none text-left p-5 lg:p-8 border-b lg:border-b-0 lg:border-r border-border transition-all duration-300 min-h-[44px] ${
                  activeFamily === i
                    ? "bg-obsidian border-l-2 lg:border-l-2 border-l-gold lg:border-r-0"
                    : "hover:bg-obsidian/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-display text-xl ${activeFamily === i ? "text-gold" : "text-cream-muted"}`}>
                    {family.icon}
                  </span>
                  <span className={`font-body text-xs tracking-widest uppercase ${activeFamily === i ? "text-gold" : "text-cream-muted"}`}>
                    {family.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className={`lg:col-span-3 bg-gradient-to-br ${active.color} border border-border p-10 lg:p-12`}>
            <div className="font-display text-4xl text-gold mb-1">{active.icon}</div>
            <h3 className="font-display text-3xl font-semibold text-cream mb-2">{active.name}</h3>
            <p className="font-body text-xs tracking-widest text-gold/70 mb-6">{active.origin}</p>
            <p className="font-body text-sm text-cream-muted leading-relaxed mb-8">{active.description}</p>

            <div>
              <p className="font-body text-xs tracking-widest uppercase text-cream-muted mb-4">
                Key Ingredients
              </p>
              <div className="flex flex-wrap gap-2">
                {active.notes.map((note) => (
                  <span
                    key={note}
                    className="font-body text-sm px-4 py-2 border border-gold/40 text-cream hover:border-gold hover:text-gold transition-colors duration-300"
                  >
                    {note}
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
