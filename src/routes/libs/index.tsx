import { Outlet, Link } from 'react-router-dom';

/**
 * @see https://ant.design/
 * @see https://pro.ant.design/
 * @see https://procomponents.ant.design/
 * @see https://mobile.ant.design/
 */
export default () => {
  return (
    <>
      <nav>
        <Link to="ahooks">ahooks</Link>
      </nav>
      <Outlet />
    </>
  );
};
