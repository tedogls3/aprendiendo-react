import { Link } from '../Link';

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Thisi is a example page to create a react router</p>
      <nav style={{ display: 'flex', gap: '12px' }}>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
}

export default HomePage;
