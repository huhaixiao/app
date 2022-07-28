import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import styled from 'styled-components';
import { setupBodyColorScheme } from './utils/dark-mode';
import { Components } from './components';
import { Demo as PickerViewDemo } from './components/picker-view';
import Libs from './routes/libs/';
import Ahooks from './routes/libs/ahooks';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

const setup = () => {
  setupBodyColorScheme();
};

setup();

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StyledNav>
                <Link to="libs">libs</Link>
                <Link to="components">components</Link>
              </StyledNav>
              <Outlet />
            </>
          }>
          <Route path="libs" element={<Libs />}>
            <Route path="ahooks" element={<Ahooks />} />
          </Route>
          <Route path="components" element={<Components />}>
            <Route path="picker-view" element={<PickerViewDemo />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);

window.addEventListener('beforeunload', () => {
  localStorage.setItem('beforeunload', 'success');
});

window.addEventListener('unload', () => {
  localStorage.setItem('beforeunload', 'success');
});
