import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import { useFilters } from "./hooks/useFilters";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartProvider";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
