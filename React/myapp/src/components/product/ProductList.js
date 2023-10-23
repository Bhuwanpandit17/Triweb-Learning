import ProductItem from "./ProductItem";
function ProductList(props)
 {
  return (
    <ul>
      {props.product.map((item) => {
       return <ProductItem key = {item.id} id = {item.id} item ={item} />;
      })}
     
    </ul>
  );
}

export default ProductList;
