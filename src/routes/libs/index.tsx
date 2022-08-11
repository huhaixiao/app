import { Route } from 'react-router-dom';
import Nav from './nav';
import Ahooks from './ahooks';
import ReactSortableHoc from './react-sortable-hoc';

export default () => {
  return (
    <Route path="libs" element={<Nav />}>
      <Route path="ahooks" element={<Ahooks />} />
      <Route path="react-sortable-hoc" element={<ReactSortableHoc />} />
    </Route>
  );
};
