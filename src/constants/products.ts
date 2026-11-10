import type { Product, Testimonial } from "@/types";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export const PRODUCTS: Product[] = [
  {
    id: "lumiere-noir",
    name: "Lumière Noir",
    subtitle: "Eau de Parfum",
    price: 320,
    size: "50ml",
    description:
      "A bold, hypnotic composition that opens with smoked oud and rich labdanum, revealing a heart of black rose and dark vetiver. The ultimate statement of mysterious allure.",
    scentFamily: "Oriental Woody",
    topNotes: ["Smoked Oud", "Black Pepper", "Bergamot"],
    heartNotes: ["Black Rose", "Labdanum", "Jasmine Absolute"],
    baseNotes: ["Dark Vetiver", "Musk", "Ambergris"],
    image: product2,
    featured: true,
    badge: "Bestseller",
  },
  {
    id: "blanc-eternel",
    name: "Blanc Éternel",
    subtitle: "Eau de Parfum",
    price: 280,
    size: "50ml",
    description:
      "Pure luminosity in a bottle. A crystalline floral built around the rarest white flowers — ylang-ylang from Comoros, tuberose absolute from Grasse — set on a base of warm sandalwood.",
    scentFamily: "Floral Woody",
    topNotes: ["White Neroli", "Fresh Aldehydes", "Green Leaves"],
    heartNotes: ["Tuberose Absolute", "Ylang-Ylang", "White Peony"],
    baseNotes: ["Sandalwood", "White Musk", "Cedarwood"],
    image: product1,
    badge: "New Arrival",
  },
  {
    id: "nuit-velours",
    name: "Nuit Velours",
    subtitle: "Extrait de Parfum",
    price: 490,
    size: "30ml",
    description:
      "Our most concentrated expression. A velveteen nocturnal fragrance woven with aged patchouli, iris butter, and the warmth of Tahitian vanilla — an intimate embrace that lasts all night.",
    scentFamily: "Chypre Floral",
    topNotes: ["Bergamot", "Pink Pepper", "Saffron"],
    heartNotes: ["Iris Butter", "Bulgarian Rose", "Oakmoss"],
    baseNotes: ["Aged Patchouli", "Tahitian Vanilla", "Benzoin"],
    image: product3,
    badge: "Limited Edition",
  },
  {
    id: "aurore-douce",
    name: "Aurore Douce",
    subtitle: "Eau de Parfum",
    price: 260,
    size: "50ml",
    description:
      "The gentle warmth of first light. A delicate gourmand-floral that balances pink magnolia and raspberry blossom against a powdery base of cashmere wood and warm tonka bean.",
    scentFamily: "Gourmand Floral",
    topNotes: ["Raspberry Blossom", "Peach Nectar", "Cardamom"],
    heartNotes: ["Pink Magnolia", "Rose Centifolia", "Heliotrope"],
    baseNotes: ["Tonka Bean", "Cashmere Wood", "Vanilla Musk"],
    image: product4,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Isabelle Fontaine",
    location: "Paris, France",
    rating: 5,
    text: "Lumière Noir stopped me in my tracks the first time I encountered it. Three years later, I cannot imagine wearing anything else. It is not just a perfume — it is an identity.",
    perfume: "Lumière Noir",
  },
  {
    id: "2",
    name: "James Whitmore",
    location: "London, UK",
    rating: 5,
    text: "Nuit Velours is the most extraordinary fragrance I have ever worn. The projection, the longevity, the sheer artistry — Maison Lumière has created something genuinely rare.",
    perfume: "Nuit Velours",
  },
  {
    id: "3",
    name: "Sophia Chen",
    location: "Hong Kong",
    rating: 5,
    text: "Blanc Éternel is everything I have been searching for — sophisticated yet warm, timeless yet modern. The packaging alone is a work of art. True luxury in every sense.",
    perfume: "Blanc Éternel",
  },
];
