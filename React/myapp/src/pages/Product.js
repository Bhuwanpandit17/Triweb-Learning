import ProductList from "../components/product/ProductList";
function Product() {
  let products = [
    {
      id: "p1",
      product_name: "city tour",
      description: "Its was nice tour",
      price: "20000",
    },
    {
      id: "p2",
      product_name: "Kathmandu tour",
      description: "Its was nice tour",
      price: "200000",
    },
    {
      id: "p3",
      product_name: "Kanchanpur tour",
      description: "Its was nice tour",
      price: "2000000",
    },
      {
      id: "p4",
      product_name: "Kanchanpur tour",
      description: "Its was nice tour",
      price: "2000000",
    },
      {
      id: "p5",
      product_name: "Kanchanpur tour",
      description: "Its was nice tour",
      price: "2000000",
    },
      {
      id: "p6",
      product_name: "Kanchanpur tour",
      description: "Its was nice tour",
      price: "2000000",
    },  {
      id: "p7",
      product_name: "Kanchanpur tour",
      description: "Its was nice tour",
      price: "2000000",
    }


  ];
  return <div>
    <ul>
       
            <ProductList product={products} />
         
       
    </ul>
  </div>
}

   
  

  


export default Product;
