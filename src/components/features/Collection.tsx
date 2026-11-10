import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/features/ProductCard";
import { PRODUCTS } from "@/constants/products";

export default function Collection() {
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
    <section id="collection" className="py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-16 bg-gold/40" />
            <span className="font-body text-xs tracking-ultra-wide uppercase text-gold">
              Our Fragrances
            </span>
            <div className="h-px flex-1 max-w-16 bg-gold/40" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-4">
            The <span className="font-semibold text-gradient-gold">Collection</span>
          </h2>
          <p className="font-body text-sm text-cream-muted leading-relaxed max-w-lg mx-auto">
            Four distinct compositions, each built around a singular olfactory vision. Handcrafted in limited batches, never compromised.
          </p>
        </div>

        {/* Product Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-obsidian">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All */}
        <div className={`text-center mt-12 transition-all duration-700 delay-400 ${visible ? "opacity-100" : "opacity-0"}`}>
          <a
            href="/collection"
            className="font-body text-xs tracking-widest uppercase px-12 py-4 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 inline-block min-h-[44px] leading-none flex items-center mx-auto w-fit"
          >
            Explore Full Collection
          </a>
        </div>
      </div>
    </section>
  );
}
