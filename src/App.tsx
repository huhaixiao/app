import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Home, Collection, Components } from './pages/';

const RoutersContainer = styled.div`
  /* padding: 24px; */
`;

const App = () => {
  return (
    <RoutersContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </RoutersContainer>
  );
};

export default App;
