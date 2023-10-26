import AddProductForm from "../components/product/AddProductForm"
import { useNavigate } from "react-router-dom";

export default function AddProduct (){
    const navigate = useNavigate();

    function addProductHandler(newProduct){
        console.log("newProduct",newProduct)
        fetch("http://127.0.0.1:3004/product",{
          method:"POST",
          body:JSON.stringify(newProduct),
          headers:{
            'content-Type':'application/json'
          }  
        }).then(response=>navigate('/',{replace:true}))
            .catch(err=>console.log(err));
    }
    return <AddProductForm addProductHandler={addProductHandler}/>

}
