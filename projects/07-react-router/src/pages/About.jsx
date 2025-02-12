import { Link } from '../Link';

function About() {
  console.log('About');
  return (
    <div>
      <h1>about</h1>
      <p>This is a about page</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default About;
