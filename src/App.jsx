import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routeItems } from "./assets/config/route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeItems.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
