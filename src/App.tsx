import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { About, Home, Collection } from "./pages/";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="collection" element={<Collection />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
