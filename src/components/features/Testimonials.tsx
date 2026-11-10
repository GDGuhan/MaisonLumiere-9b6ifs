import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/constants/products";

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));
  const t = TESTIMONIALS[active];

  return (
    <section className="py-28 bg-obsidian overflow-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-16 bg-gold/40" />
            <span className="font-body text-xs tracking-ultra-wide uppercase text-gold">
              Client Words
            </span>
            <div className="h-px flex-1 max-w-16 bg-gold/40" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream">
            Those Who <span className="font-semibold text-gradient-gold">Know</span>
          </h2>
        </div>

        {/* Testimonial */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="border border-border p-10 lg:p-14 text-center relative">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-display text-2xl md:text-3xl italic font-light text-cream leading-relaxed mb-8">
              "{t.text}"
            </blockquote>

            <div className="font-body text-xs tracking-widest uppercase text-gold">{t.name}</div>
            <div className="font-body text-xs text-cream-muted mt-1">{t.location}</div>
            <div className="font-body text-xs text-cream-muted/60 mt-1 italic">On {t.perfume}</div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 border border-border flex items-center justify-center text-cream-muted hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 ${
                    i === active ? "w-8 h-1 bg-gold" : "w-2 h-1 bg-border hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 border border-border flex items-center justify-center text-cream-muted hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
