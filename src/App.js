import React from "react";
import { Home } from "./components/home.js";
import { About } from "./components/about.js";
import { Product } from "./components/product";
import { ProductDetails } from "./components/productDetails";
import {ProductHome} from './components/productHome'
import { Error } from "./components/404.js";
import { Routes, Route } from "react-router-dom";
import { Link ,useNavigate} from "react-router-dom";

function App() {

  const navigation = useNavigate();

  return (
    <div className="App">
      <h1>Hello App</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Product</Link>
      <Link to="/product/book">Book</Link>
      <Link to="/product/pen">Pen</Link>
      <button onClick={()=>{
navigation("/about")
      }}>Navigate to About</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
        <Route path="/" element={<ProductHome />} />
          <Route path=":productID" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
