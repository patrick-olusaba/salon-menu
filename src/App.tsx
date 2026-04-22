import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SalonMenu from "./components/SalonMenu";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<SalonMenu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
