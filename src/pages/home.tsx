import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav>
      <Link to="/collection">Collection</Link>
      <hr />
      <Link to="/components">Components</Link>
      <hr />
      <Link to="/learn-form">learn-form</Link>
    </nav>
  );
};
