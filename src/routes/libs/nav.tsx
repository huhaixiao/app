import { Outlet, Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <hr />
      <nav>
        <Link to="ahooks">ahooks</Link>
        <Link to="react-sortable-hoc">react-sortable-hoc</Link>
      </nav>
      <Outlet />
    </>
  );
};
