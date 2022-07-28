import { Link, Outlet } from 'react-router-dom';

export default () => {
  return (
    <div>
      <nav>
        <Link to="antd">antd</Link>
      </nav>
      <Outlet />
    </div>
  );
};
