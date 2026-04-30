import antidandruff from "../assets/products/antidandruff.png";
import beardpackage from "../assets/products/beardpackage.png";
import hairfood from "../assets/products/hairfood.png";
import hairoil from "../assets/products/hairoil.png";

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
  { id: "all",   label: "All Products" },
  { id: "hair",  label: "Hair Care" },
  { id: "beard", label: "Beard & Shave" },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Anti-Dandruff Treatment",
    brand: "Master Stylists",
    price: "KSh 300",
    description: "Targeted scalp treatment that eliminates dandruff and soothes irritation.",
    image: antidandruff,
    category: "hair",
  },
  {
    id: "p2",
    name: "Beard Package",
    brand: "Master Stylists",
    price: "KSh 1,200",
    description: "Complete beard care kit — trim, shape, condition and style all in one.",
    image: beardpackage,
    category: "beard",
  },
  {
    id: "p3",
    name: "Hair Food (Men)",
    brand: "Master Stylists",
    price: "KSh 200",
    description: "Nourishing hair food that moisturises, strengthens and adds shine.",
    image: hairfood,
    category: "hair",
  },
  {
    id: "p4",
    name: "Hair Food (Women)",
    brand: "Master Stylists",
    price: "KSh 350",
    description: "Nourishing hair food that moisturises, strengthens and adds shine.",
    image: hairfood,
    category: "hair",
  },
  {
    id: "p5",
    name: "Hair Oil",
    brand: "Master Stylists",
    price: "KSh 500",
    description: "Lightweight oil blend for scalp health, growth and frizz control.",
    image: hairoil,
    category: "hair",
  },
];
