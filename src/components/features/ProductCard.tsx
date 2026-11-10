import { useState } from "react";
import { ShoppingBag, Eye } from "lucide-react";
import type { Product } from "@/types";
import { toast } from "sonner";

interface Props {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: Props) {
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = () => {
    toast.success(`${product.name} added to your selection`, {
      description: `${product.subtitle} · ${product.size}`,
      style: {
        background: "hsl(20, 8%, 10%)",
        border: "1px solid hsl(40, 50%, 35%)",
        color: "hsl(40, 30%, 92%)",
      },
    });
  };

  return (
    <div
      className={`group relative flex flex-col bg-obsidian-card border border-border hover:border-gold transition-all duration-500 ${
        featured ? "lg:col-span-1" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="font-body text-xs tracking-widest uppercase px-3 py-1 bg-gold text-obsidian font-semibold">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden bg-obsidian aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-obsidian/60 flex items-center justify-center gap-3 transition-opacity duration-400 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={handleAddToCart}
            aria-label="Add to bag"
            className="w-12 h-12 bg-gold text-obsidian flex items-center justify-center hover:bg-gold-light transition-colors duration-300"
          >
            <ShoppingBag size={16} />
          </button>
          <a
            href="/collection"
            aria-label="View details"
            className="w-12 h-12 border border-cream text-cream flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
          >
            <Eye size={16} />
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-1">
            {product.scentFamily}
          </p>
          <h3 className="font-display text-2xl font-semibold text-cream group-hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-body text-xs text-cream-muted tracking-wide">
            {product.subtitle} · {product.size}
          </p>
        </div>

        <p className="font-body text-sm text-cream-muted leading-relaxed line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Notes Preview */}
        <div className="flex flex-wrap gap-1 mt-1">
          {product.topNotes.slice(0, 2).map((note) => (
            <span
              key={note}
              className="font-body text-xs px-2 py-1 border border-border text-cream-muted"
            >
              {note}
            </span>
          ))}
          <span className="font-body text-xs px-2 py-1 border border-border text-cream-muted">
            +{product.topNotes.length + product.heartNotes.length + product.baseNotes.length - 2} more
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-2 pt-4 border-t border-border">
          <div>
            <span className="font-display text-2xl font-semibold text-gold">
              ${product.price}
            </span>
            <span className="font-body text-xs text-cream-muted ml-1">{product.size}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="font-body text-xs tracking-widest uppercase px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 min-h-[44px]"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
