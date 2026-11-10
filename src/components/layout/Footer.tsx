import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-display text-2xl font-light tracking-widest text-gold">MAISON</div>
              <div className="font-display text-xl font-semibold tracking-ultra-wide text-cream">LUMIÈRE</div>
            </div>
            <p className="font-body text-sm text-cream-muted leading-relaxed mb-6">
              Crafting exceptional fragrances since 1987. Each bottle holds a story of rare ingredients, artisan craftsmanship, and timeless elegance.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <button
                  key={i}
                  aria-label="Social media"
                  className="w-10 h-10 border border-border flex items-center justify-center text-cream-muted hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Collection */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-6">Collection</h4>
            <ul className="space-y-3">
              {["Lumière Noir", "Blanc Éternel", "Nuit Velours", "Aurore Douce", "View All"].map((item) => (
                <li key={item}>
                  <a href="/collection" className="font-body text-sm text-cream-muted hover:text-cream transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-6">Maison</h4>
            <ul className="space-y-3">
              {["Our Story", "The Atelier", "Ingredients", "Sustainability", "Press"].map((item) => (
                <li key={item}>
                  <a href="/#story" className="font-body text-sm text-cream-muted hover:text-cream transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-6">Stay Connected</h4>
            <p className="font-body text-sm text-cream-muted leading-relaxed mb-4">
              Receive exclusive launches, stories from our atelier, and private offers.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector("input");
                if (input) input.value = "";
              }}
            >
              <div className="flex items-center border border-border focus-within:border-gold transition-colors duration-300">
                <Mail size={14} className="ml-3 text-cream-muted flex-shrink-0" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent px-3 py-3 text-sm font-body text-cream placeholder-cream-muted w-full outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="font-body text-xs tracking-widest uppercase py-3 gradient-gold text-obsidian font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream-muted tracking-wide">
            © 2026 Maison Lumière. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Shipping & Returns"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-xs text-cream-muted hover:text-cream transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
