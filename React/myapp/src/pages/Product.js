import ProductList from "../components/product/ProductList";
import { useState, useEffect } from "react";

function Product() {
  let [products, setProducts] = useState([]);
  let [isDataFetching, setIsDataFetching] = useState(true);

  useEffect(() => {
    setIsDataFetching(true);
    fetch("http://127.0.0.1:3004/product")
      .then((response) => response.json())
      .then((responseData) => {
        setIsDataFetching(false);
        setProducts(responseData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isDataFetching) {
    return "Data is loading";
  }
  return (
    <div>
      <ProductList product={products} />
    </div>
  );
}

export default Product;
