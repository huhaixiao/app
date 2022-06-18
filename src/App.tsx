import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Collection } from "./pages/";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
