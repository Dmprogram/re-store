import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../header";

import { CartPage, HomePage } from "../pages";

function App() {
  return (
    <main role="main" className="container">
      <BrowserRouter>
        <Header numItems={5} total={200} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
