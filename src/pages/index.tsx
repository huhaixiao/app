import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/collection">Collection</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export const About = () => {
  return <span>about</span>;
};
