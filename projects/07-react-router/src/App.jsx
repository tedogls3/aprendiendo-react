import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import Router from './Router.';
import NotFound from './pages/NotFound.jsx';
import Products from './pages/Products.jsx';
import SearchPage from './pages/SearchPage.jsx';
import Route from './Route.jsx';

import { lazy } from 'react';

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={NotFound}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={About} />
        <Route path="/products" Component={Products} />
      </Router>
    </main>
  );
}

export default App;
