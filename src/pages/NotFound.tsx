import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-obsidian flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display text-[120px] leading-none font-light text-gold/20 mb-4">404</div>
        <h1 className="font-display text-4xl font-light text-cream mb-4">Page Not Found</h1>
        <p className="font-body text-sm text-cream-muted mb-8 max-w-xs mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="font-body text-xs tracking-widest uppercase px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 inline-block"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
