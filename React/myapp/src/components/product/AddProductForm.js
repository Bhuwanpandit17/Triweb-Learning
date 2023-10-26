import {useRef} from 'react';
import Styles from "./AddProductForm.module.css";
import CustomWrapper from "../layouts/CustomWrapper";

 export default function AddProductForm(props) {
const product_name_ref = useRef();
const image_ref = useRef();
const price_ref = useRef();
const description_ref = useRef();


    function submitHandler(event){
        event.preventDefault();
        const product_name = product_name_ref.current.value;
        const image = image_ref.current.value;
        const price= price_ref.current.value;
        const description = description_ref.current.value;

        const product = {
            product_name,
            image,
            price,
            description
        }
        props.addProductHandler(product)
     
         
    }
  return (
    <CustomWrapper>
      <div className={Styles.AddProductForm}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="product_name"> Enter Product Name</label>
            <input type="text" placeholder="" id="product_name" ref={product_name_ref}/>
          </div>

          <div>
            <label htmlFor="Image">Image</label>
            <input type="text" placeholder="" id="Image" ref= {image_ref} />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="" id="price" ref ={price_ref}/>
          </div>

          <div>
            <label htmlFor="description">Enter description</label>
            <textarea rows="5" placeholder="" id="description" ref = {description_ref} />
          </div>

          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
    </CustomWrapper>
  );
  
  
  
};
