/* eslint-disable react/prop-types */

import { useState } from "react";
import { FiltersContext } from "./filtersContext";

// Create provider
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 250,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return (
    <FiltersContext.Provider value={{ filters, setFilters, filterProducts }}>
      {children}
    </FiltersContext.Provider>
  );
}
