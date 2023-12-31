import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/add" element={<AddProduct />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
