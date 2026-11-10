import { useState } from "react";
import ProductCard from "@/components/features/ProductCard";
import { PRODUCTS } from "@/constants/products";

const scentFamilies = ["All", "Oriental Woody", "Floral Woody", "Chypre Floral", "Gourmand Floral"];

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.scentFamily === activeFilter);

  return (
    <main className="min-h-screen bg-obsidian pt-20">
      {/* Page Header */}
      <div className="relative py-24 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(40,50%,15%)_0%,_transparent_70%)] opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="font-body text-xs tracking-ultra-wide uppercase text-gold">
              Maison Lumière
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-light text-cream mb-4">
            The <span className="font-semibold text-gradient-gold">Collection</span>
          </h1>
          <p className="font-body text-sm text-cream-muted max-w-lg mx-auto leading-relaxed">
            Four compositions. Each a world unto itself. Crafted with uncompromising attention to the rarest ingredients.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-border sticky top-20 z-40 bg-obsidian/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex gap-0 overflow-x-auto">
            {scentFamilies.map((family) => (
              <button
                key={family}
                onClick={() => setActiveFilter(family)}
                className={`font-body text-xs tracking-widest uppercase px-6 py-5 whitespace-nowrap transition-all duration-300 min-h-[44px] border-b-2 ${
                  activeFilter === family
                    ? "text-gold border-gold"
                    : "text-cream-muted border-transparent hover:text-cream"
                }`}
              >
                {family}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <p className="font-body text-xs text-cream-muted tracking-wide mb-8">
          Showing {filtered.length} {filtered.length === 1 ? "fragrance" : "fragrances"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {filtered.map((product) => (
            <div key={product.id} className="bg-obsidian">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-3xl text-cream-muted italic">No fragrances in this family yet.</p>
          </div>
        )}
      </div>

      {/* Philosophy Strip */}
      <div className="border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "⬡", title: "Natural Ingredients Only", desc: "Every raw material is ethically sourced directly from growers we trust." },
              { icon: "⬢", title: "Limited Batch Production", desc: "Each collection is produced in small runs to maintain uncompromising quality." },
              { icon: "⬡", title: "Handcrafted in Grasse", desc: "Our atelier in the world's perfume capital has operated since 1987." },
            ].map((item) => (
              <div key={item.title} className="p-8 border border-border hover:border-gold/40 transition-colors duration-300">
                <div className="font-display text-3xl text-gold mb-4">{item.icon}</div>
                <h3 className="font-display text-xl font-semibold text-cream mb-3">{item.title}</h3>
                <p className="font-body text-sm text-cream-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
