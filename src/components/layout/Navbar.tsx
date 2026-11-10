import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Collection", href: "/collection" },
    { label: "Story", href: "/#story" },
    { label: "Ingredients", href: "/#ingredients" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start leading-none group">
          <span className="font-display text-2xl font-light tracking-widest text-gold group-hover:text-gold-light transition-colors duration-300">
            MAISON
          </span>
          <span className="font-display text-xl font-semibold tracking-ultra-wide text-cream group-hover:text-gold transition-colors duration-300">
            LUMIÈRE
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-xs tracking-widest uppercase text-cream-muted hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            aria-label="Shopping bag"
            className="text-cream-muted hover:text-gold transition-colors duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <ShoppingBag size={18} />
          </button>
          <a
            href="/collection"
            className="font-body text-xs tracking-widest uppercase px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300"
          >
            Shop Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-cream hover:text-gold transition-colors duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-obsidian border-t border-border`}
      >
        <ul className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-sm tracking-widest uppercase text-cream-muted hover:text-gold transition-colors duration-300 block min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/collection"
              className="font-body text-xs tracking-widest uppercase px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 inline-block mt-2"
            >
              Shop Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
