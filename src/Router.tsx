import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Announcement from "./components/Announcement";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Drinks from "./components/Drinks";
import Recipes from "./components/Recipes";
import About from "./components/About";
import Footer from "./components/Footer";
import ItemPreview from "./components/ItemPreview";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import { CartProvider } from "./CartContext";
import Cart from "./components/Cart";

const Taste = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-h", searchActive);
  }, [searchActive]);

  return (
    <CartProvider>
      <Router>
        {searchActive && <Search setSearchActive={setSearchActive} />}
        <Announcement />
        <Nav setSearchActive={setSearchActive} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/preview/:id" element={<ItemPreview />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default Taste;
