import ProductItem from "./ProductItem";
function ProductList(props)
 {
  return (
    <ul>
      {props.product.map((item) => {
       return <ProductItem item ={item} />;
      })}
     
    </ul>
  );
}

export default ProductList;
