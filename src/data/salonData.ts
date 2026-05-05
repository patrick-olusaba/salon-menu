export type Service = {
  name: string;
  price: string;
  description?: string;
  duration?: string;
  image?: string;
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  accent: string;
  image: string;
  group: "men" | "women" | "everyone";
  services: Service[];
};

export const categories: Category[] = [

  // ── MEN ──────────────────────────────────────────────────────
  {
    id: "mens-grooming",
    title: "Men's Cuts & Grooming",
    subtitle: "Haircuts, fades, beard & shave",
    icon: "✂",
    accent: "#b8965a",
    group: "men",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80&auto=format&fit=crop",
    services: [
      { name: "Classic Haircut", price: "KSh 500", description: "Scissor or clipper cut with styling", duration: "30 min", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80&auto=format&fit=crop" },
      { name: "Fade & Taper", price: "KSh 600", description: "Clean low, mid or high fade", duration: "35 min", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80&auto=format&fit=crop" },
      { name: "Executive Cut", price: "KSh 800", description: "Precision cut for professionals", duration: "45 min", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80&auto=format&fit=crop" },
      { name: "Shape-Up / Line-Up", price: "KSh 300", description: "Edge-up and hairline definition", duration: "15 min", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80&auto=format&fit=crop" },
      { name: "Kids Haircut (under 10)", price: "KSh 400", description: "Gentle cut for little ones", duration: "25 min", image: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=600&q=80&auto=format&fit=crop" },
      { name: "Beard Trim & Shape", price: "KSh 400", description: "Scissor and clipper sculpting", duration: "20 min", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80&auto=format&fit=crop" },
      { name: "Hot Towel Shave", price: "KSh 700", description: "Classic straight razor with hot towel ritual", duration: "40 min", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80&auto=format&fit=crop" },
      { name: "Beard & Haircut Combo", price: "KSh 900", description: "Full grooming package", duration: "60 min", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80&auto=format&fit=crop" },
      { name: "Mustache Trim", price: "KSh 250", description: "Quick shape and tidy", duration: "10 min", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80&auto=format&fit=crop" },
    ],
  },

  // ── WOMEN ─────────────────────────────────────────────────────
  {
    id: "womens-hair",
    title: "Women's Hair & Styling",
    subtitle: "Cuts, blow-dry & finish",
    icon: "◈",
    accent: "#b87fa8",
    group: "women",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80&auto=format&fit=crop",
    services: [
      { name: "Wash & Blow Dry", price: "KSh 700", description: "Shampoo, condition, blow out", duration: "45 min", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop" },
      { name: "Trim & Style", price: "KSh 900", description: "Precision trim with blow-dry finish", duration: "60 min", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80&auto=format&fit=crop" },
      { name: "Full Cut & Style", price: "KSh 1,200", description: "Creative cut tailored to you", duration: "75 min", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80&auto=format&fit=crop" },
      { name: "Fringe / Bangs Trim", price: "KSh 300", description: "Quick refresh between cuts", duration: "15 min", image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80&auto=format&fit=crop" },
    ],
  },
  {
    id: "braiding",
    title: "Braiding & Natural Hair",
    subtitle: "Protective & creative styles",
    icon: "≋",
    accent: "#8b6abf",
    group: "women",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop",
    services: [
      { name: "Box Braids (Small)", price: "KSh 4,000", description: "Individual braids, small size", duration: "5–7 hrs", image: "https://images.unsplash.com/photo-1612363148049-b3c2f7b5e1e1?w=600&q=80&auto=format&fit=crop" },
      { name: "Box Braids (Large)", price: "KSh 2,500", description: "Individual braids, large size", duration: "3–4 hrs", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80&auto=format&fit=crop" },
      { name: "Cornrows (Simple)", price: "KSh 600", description: "Straight-back or simple pattern", duration: "45 min", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop" },
      { name: "Cornrows (Intricate)", price: "KSh 1,500", description: "Custom geometric or curved patterns", duration: "2–3 hrs", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80&auto=format&fit=crop" },
      { name: "Twist-Out / Wash & Go", price: "KSh 900", description: "Natural texture definition", duration: "60 min", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80&auto=format&fit=crop" },
      { name: "Dreadlock Retwist", price: "KSh 1,500", description: "Maintenance retwist service", duration: "90 min", image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80&auto=format&fit=crop" },
    ],
  },
  {
    id: "waxing",
    title: "Waxing & Threading",
    subtitle: "Hair removal services",
    icon: "⟁",
    accent: "#c9a070",
    group: "women",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&auto=format&fit=crop",
    services: [
      { name: "Eyebrow Threading", price: "KSh 300", description: "Precise shaping with thread", duration: "15 min", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&auto=format&fit=crop" },
      { name: "Upper Lip Threading", price: "KSh 200", description: "Clean upper lip line", duration: "10 min", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop" },
      { name: "Full Face Thread", price: "KSh 700", description: "Brows, lip, chin & sides", duration: "30 min", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&auto=format&fit=crop" },
      { name: "Underarm Wax", price: "KSh 600", description: "Hot or cold wax", duration: "20 min", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&auto=format&fit=crop" },
      { name: "Leg Wax (Half)", price: "KSh 1,000", description: "Lower leg waxing", duration: "30 min", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80&auto=format&fit=crop" },
      { name: "Leg Wax (Full)", price: "KSh 1,800", description: "Full leg waxing", duration: "45 min", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80&auto=format&fit=crop" },
    ],
  },
  {
    id: "makeup",
    title: "Makeup",
    subtitle: "Looks for every occasion",
    icon: "✿",
    accent: "#b07ab8",
    group: "women",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop",
    services: [
      { name: "Everyday Makeup", price: "KSh 2,000", description: "Natural daytime look", duration: "45 min", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop" },
      { name: "Evening / Event Glam", price: "KSh 3,500", description: "Full glam for special occasions", duration: "75 min", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&auto=format&fit=crop" },
      { name: "Bridal Makeup (Trial)", price: "KSh 4,000", description: "Rehearsal session + consultation", duration: "2 hrs", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80&auto=format&fit=crop" },
      { name: "Bridal Makeup (Day-of)", price: "KSh 6,000", description: "Final bridal look", duration: "2 hrs", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop" },
    ],
  },

  // ── EVERYONE ──────────────────────────────────────────────────
  {
    id: "coloring",
    title: "Hair Coloring",
    subtitle: "Color & highlights",
    icon: "✦",
    accent: "#c97844",
    group: "everyone",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop",
    services: [
      { name: "Full Color (Short)", price: "KSh 2,500", description: "Single-process all-over color", duration: "90 min", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop" },
      { name: "Full Color (Long)", price: "KSh 3,500", description: "Single-process all-over color", duration: "120 min", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80&auto=format&fit=crop" },
      { name: "Highlights / Balayage", price: "From KSh 3,000", description: "Hand-painted or foil technique", duration: "2–3 hrs", image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80&auto=format&fit=crop" },
      { name: "Toning / Gloss", price: "KSh 1,500", description: "Refresh and tone existing color", duration: "45 min", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80&auto=format&fit=crop" },
      { name: "Root Touch-Up", price: "KSh 1,800", description: "Re-grow coverage only", duration: "60 min", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80&auto=format&fit=crop" },
    ],
  },
  {
    id: "treatments",
    title: "Hair Treatments",
    subtitle: "Restore, strengthen & shine",
    icon: "◉",
    accent: "#6e8ec9",
    group: "everyone",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80&auto=format&fit=crop",
    services: [
      { name: "Deep Conditioning", price: "KSh 1,000", description: "Intensive moisture & repair mask", duration: "45 min", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80&auto=format&fit=crop" },
      { name: "Keratin Smoothing", price: "KSh 5,000", description: "Frizz control up to 4 months", duration: "3 hrs", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop" },
      { name: "Relaxer / Texturizer", price: "KSh 2,000", description: "Professional-grade straightening", duration: "90 min", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80&auto=format&fit=crop" },
      { name: "Scalp Treatment", price: "KSh 1,200", description: "Targeted dandruff or dry-scalp therapy", duration: "30 min", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80&auto=format&fit=crop" },
      { name: "Hot Oil Treatment", price: "KSh 800", description: "Warm oil infusion for shine", duration: "30 min", image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80&auto=format&fit=crop" },
    ],
  },
  {
    id: "nails",
    title: "Nail Services",
    subtitle: "Manicure & pedicure",
    icon: "◇",
    accent: "#c96f6f",
    group: "everyone",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop",
    services: [
      { name: "Classic Manicure", price: "KSh 700", description: "Shape, buff, cuticle care & polish", duration: "30 min", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop" },
      { name: "Gel Manicure", price: "KSh 1,200", description: "Long-lasting gel polish application", duration: "45 min", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop" },
      { name: "Classic Pedicure", price: "KSh 1,000", description: "Soak, scrub, shape & polish", duration: "45 min", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80&auto=format&fit=crop" },
      { name: "Gel Pedicure", price: "KSh 1,500", description: "Full pedicure with gel finish", duration: "60 min", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80&auto=format&fit=crop" },
      { name: "Nail Art (per nail)", price: "KSh 100", description: "Custom art on request", duration: "Varies", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop" },
      { name: "Mani & Pedi Combo", price: "KSh 1,600", description: "Classic mani + pedi package", duration: "75 min", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80&auto=format&fit=crop" },
    ],
  },
  {
    id: "facial",
    title: "Facial Treatments",
    subtitle: "Skin care & glow",
    icon: "❋",
    accent: "#78a89a",
    group: "everyone",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop",
    services: [
      { name: "Express Facial", price: "KSh 1,500", description: "Quick cleanse, tone & moisturise", duration: "30 min", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop" },
      { name: "Deep Cleanse Facial", price: "KSh 2,500", description: "Extraction, steam & mask", duration: "60 min", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&auto=format&fit=crop" },
      { name: "Anti-Aging Facial", price: "KSh 3,000", description: "Firming and rejuvenating treatment", duration: "75 min", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80&auto=format&fit=crop" },
      { name: "Men's Facial", price: "KSh 2,000", description: "Tailored for male skin needs", duration: "45 min", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop" },
    ],
  },
  {
    id: "spa",
    title: "Spa & Massage",
    subtitle: "Relax and restore",
    icon: "◯",
    accent: "#5f9ab8",
    group: "everyone",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop",
    services: [
      { name: "Neck & Shoulder Massage", price: "KSh 1,000", description: "Tension relief for upper body", duration: "30 min", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop" },
      { name: "Full Body Massage", price: "KSh 3,000", description: "Swedish or deep tissue", duration: "60 min", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80&auto=format&fit=crop" },
      { name: "Head Massage", price: "KSh 700", description: "Scalp and cranial relaxation", duration: "20 min", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80&auto=format&fit=crop" },
      { name: "Foot Massage", price: "KSh 800", description: "Reflexology-inspired foot treatment", duration: "30 min", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop" },
    ],
  },
];

export const CONTACT = {
  phone: "+254 701 530 443",
  email: "hello@masterstylistssalon.co.ke",
  address: "Valley Arcade Mini Mall, Nairobi",
  hours: "Mon – Sat: 8 AM – 8 PM",
  hoursSun: "Sun: 10 AM – 6 PM",
};

export const SOCIAL = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/masterstylist_salon_and_barber/",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/peter.chege.7547",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@masterstylist2021",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>`,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/254701530443",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
  },
];

export const galleryItems = [
  { id: 1, label: "Fade & Taper", src: "" },
  { id: 2, label: "Box Braids", src: "" },
  { id: 3, label: "Bridal Makeup", src: "" },
  { id: 4, label: "Hot Towel Shave", src: "" },
  { id: 5, label: "Balayage Color", src: "" },
  { id: 6, label: "Gel Nails", src: "" },
  { id: 7, label: "Deep Cleanse Facial", src: "" },
  { id: 8, label: "Cornrows", src: "" },
  { id: 9, label: "Keratin Smoothing", src: "" },
];
