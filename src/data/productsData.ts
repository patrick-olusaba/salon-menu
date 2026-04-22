export type Product = {
  id: string;
  name: string;
  brand: string;
  price: string;
  description: string;
  image: string;
  category: string;
};

export type ProductCategory = {
  id: string;
  label: string;
};

export const productCategories: ProductCategory[] = [
  { id: "all", label: "All Products" },
  { id: "hair", label: "Hair Care" },
  { id: "skin", label: "Skin Care" },
  { id: "beard", label: "Beard & Shave" },
  { id: "nails", label: "Nails" },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Argan Oil Hair Serum",
    brand: "OGX",
    price: "KSh 1,200",
    description: "Lightweight serum that tames frizz and adds brilliant shine.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80&auto=format&fit=crop",
    category: "hair",
  },
  {
    id: "p2",
    name: "Deep Moisture Shampoo",
    brand: "Shea Moisture",
    price: "KSh 950",
    description: "Sulfate-free shampoo enriched with shea butter for dry hair.",
    image: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=500&q=80&auto=format&fit=crop",
    category: "hair",
  },
  {
    id: "p3",
    name: "Curl Defining Cream",
    brand: "Cantu",
    price: "KSh 800",
    description: "Defines and holds natural curls without crunch or flaking.",
    image: "https://images.unsplash.com/photo-1631390093888-d3a9e4a5b5b5?w=500&q=80&auto=format&fit=crop",
    category: "hair",
  },
  {
    id: "p4",
    name: "Beard Balm",
    brand: "Honest Amish",
    price: "KSh 1,100",
    description: "Conditions and styles beard hair while moisturising the skin beneath.",
    image: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=500&q=80&auto=format&fit=crop",
    category: "beard",
  },
  {
    id: "p5",
    name: "Shaving Cream",
    brand: "Proraso",
    price: "KSh 750",
    description: "Classic eucalyptus and menthol shaving cream for a smooth, close shave.",
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&q=80&auto=format&fit=crop",
    category: "beard",
  },
  {
    id: "p6",
    name: "Vitamin C Face Serum",
    brand: "TruSkin",
    price: "KSh 1,800",
    description: "Brightening serum that evens skin tone and reduces dark spots.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80&auto=format&fit=crop",
    category: "skin",
  },
  {
    id: "p7",
    name: "Moisturising Face Cream",
    brand: "CeraVe",
    price: "KSh 1,400",
    description: "Lightweight daily moisturiser with ceramides and hyaluronic acid.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80&auto=format&fit=crop",
    category: "skin",
  },
  {
    id: "p8",
    name: "Cuticle Oil",
    brand: "Sally Hansen",
    price: "KSh 500",
    description: "Nourishing oil that softens cuticles and strengthens nails.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80&auto=format&fit=crop",
    category: "nails",
  },
  {
    id: "p9",
    name: "Nail Strengthener",
    brand: "OPI",
    price: "KSh 900",
    description: "Fortifying base coat that prevents breakage and peeling.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80&auto=format&fit=crop",
    category: "nails",
  },
];
