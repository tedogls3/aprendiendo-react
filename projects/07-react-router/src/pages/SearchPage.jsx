import { useEffect } from 'react';

/* eslint-disable react/prop-types */
function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `${routeParams.query}`;
  }, [routeParams]);

  return (
    <div>
      <h1>has buscado {routeParams.query}</h1>
    </div>
  );
}

export default SearchPage;
