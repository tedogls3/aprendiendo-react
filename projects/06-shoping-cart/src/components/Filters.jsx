import "./Filters.css";
import { useId } from "react";
import { useFilters } from "../hooks/useFilters";

function Filters() {
  const { filters, setFilters: onChange } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    onChange((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    onChange((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
          value={filters.category}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">SmartPhones</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;
