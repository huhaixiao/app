import { Outlet, Link } from 'react-router-dom';

export const Components = () => {
  return (
    <>
      <h1>Components</h1>
      <nav>
        <Link to="picker-view">PickerView</Link>
        <br/>
        <Link to="waterfall">waterfall</Link>
      </nav>
      <Outlet />
    </>
  );
};
