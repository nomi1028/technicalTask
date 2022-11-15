import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductData from "./components/ProductData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:category" element={<ProductData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
