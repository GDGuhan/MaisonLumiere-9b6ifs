export default function Banner() {
  return (
    <div className="py-4 bg-gold/10 border-y border-gold/20 overflow-hidden">
      <div className="flex gap-16 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-16 flex-shrink-0">
            <span className="font-body text-xs tracking-ultra-wide uppercase text-gold">Free Shipping on Orders Over $200</span>
            <span className="text-gold/40">◆</span>
            <span className="font-body text-xs tracking-ultra-wide uppercase text-gold/70">Complimentary Samples with Every Order</span>
            <span className="text-gold/40">◆</span>
            <span className="font-body text-xs tracking-ultra-wide uppercase text-gold">Handcrafted in Grasse, France</span>
            <span className="text-gold/40">◆</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
