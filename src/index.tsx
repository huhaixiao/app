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
import Libs from './libs/';
import Antd from './libs/antd/';
import FormPage from './libs/antd/form';

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
                <Link to="components">components</Link>
                <Link to="libs">libs</Link>
              </StyledNav>
              <Outlet />
            </>
          }>
          <Route path="components" element={<Components />}>
            <Route path="picker-view" element={<PickerViewDemo />} />
          </Route>
          <Route path="libs" element={<Libs />}>
            <Route path="antd" element={<Antd />}>
              <Route path="form" element={<FormPage />} />
            </Route>
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
