import "./app.css";
import { useMemo, useState } from "react";
import Movies from "./components/movies";
import debounce from "just-debounce-it";

import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const debounceGetMovies = useMemo(
    () =>
      debounce((search) => {
        console.log("search", search);
        getMovies({ search });
      }, 5000),
    [getMovies]
  );

  const handleInputChange = (e) => {
    const newSearch = e.target.value;
    updateSearch(newSearch);
    debounceGetMovies(newSearch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            type="text"
            placeholder="Avengrs, Star Wars, The Matrix"
            onChange={handleInputChange}
            value={search}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
