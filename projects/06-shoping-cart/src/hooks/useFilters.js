import { useContext } from "react";
import { FiltersContext } from "../context/filtersContext";

export function useFilters() {
  const context = useContext(FiltersContext);

  if (context === undefined) {
    throw new Error("useFilters must be used within a filtersProvider");
  }

  return context;
}
