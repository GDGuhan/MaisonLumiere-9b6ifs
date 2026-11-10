import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message received", {
        description: "Our team will respond within 24 hours.",
        style: {
          background: "hsl(20, 8%, 10%)",
          border: "1px solid hsl(40, 50%, 35%)",
          color: "hsl(40, 30%, 92%)",
        },
      });
    }, 1500);
  };

  const contactInfo = [
    { icon: MapPin, label: "Atelier", value: "12 Rue des Fleurs, Grasse, France 06130" },
    { icon: Phone, label: "Telephone", value: "+33 4 93 36 01 00" },
    { icon: Mail, label: "Email", value: "contact@maisonlumiere.fr" },
    { icon: Clock, label: "Hours", value: "Mon – Sat, 10:00 – 18:00 CET" },
  ];

  const inputClass = "w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 font-body text-sm text-cream placeholder-cream-muted/50 transition-colors duration-300 min-h-[44px]";

  return (
    <section id="contact" className="py-28 bg-obsidian-light border-t border-border">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="font-body text-xs tracking-ultra-wide uppercase text-gold">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream">
            Visit <span className="font-semibold text-gradient-gold">L'Atelier</span>
          </h2>
          <p className="font-body text-sm text-cream-muted mt-4 max-w-md leading-relaxed">
            We welcome private consultations, bespoke fragrance commissions, and wholesale enquiries. Reach us at our Grasse atelier or use the form below.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Info Panel */}
          <div className="lg:col-span-2 space-y-1">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 p-6 border border-border hover:border-gold/40 transition-colors duration-300">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gold mb-1">{label}</p>
                  <p className="font-body text-sm text-cream-muted">{value}</p>
                </div>
              </div>
            ))}

            {/* Bespoke Banner */}
            <div className="p-8 bg-gradient-to-br from-gold-dark/20 to-obsidian border border-gold/30 mt-4">
              <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">Bespoke Service</p>
              <p className="font-display text-xl text-cream mb-3">Your Signature Scent</p>
              <p className="font-body text-xs text-cream-muted leading-relaxed">
                Commission a one-of-a-kind fragrance created exclusively for you, crafted personally by our head perfumer. Available by appointment only.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="font-body text-xs tracking-widest uppercase text-cream-muted block mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Élise Dubois"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-body text-xs tracking-widest uppercase text-cream-muted block mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="font-body text-xs tracking-widest uppercase text-cream-muted block mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`${inputClass} cursor-pointer bg-obsidian`}
                >
                  <option value="" disabled>Select an enquiry type</option>
                  <option value="general">General Enquiry</option>
                  <option value="bespoke">Bespoke Commission</option>
                  <option value="wholesale">Wholesale Partnership</option>
                  <option value="press">Press & Media</option>
                  <option value="visit">Atelier Visit</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="font-body text-xs tracking-widest uppercase text-cream-muted block mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="Tell us how we may assist you..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full font-body text-xs tracking-widest uppercase py-4 gradient-gold text-obsidian font-semibold hover:opacity-90 transition-opacity duration-300 disabled:opacity-60 min-h-[44px]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
