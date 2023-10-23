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
    }
  ];
  return <div>
    <ul>
        {products.map((item)=>{
            return <div>
                <li key={item.id}> {item.product_name}</li>
            </div>
        })}
    </ul>
  </div>
}

   
  

  


export default Product;
