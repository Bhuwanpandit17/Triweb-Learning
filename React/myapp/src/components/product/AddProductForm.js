import Styles from "./AddProductForm.module.css";
import CustomWrapper from "../layouts/CustomWrapper";

export default function AddProductForm() {
  return (
    <CustomWrapper>
      <div className={Styles.AddProductForm}>
        <form>
          <div>
            <label htmlFor="product_name"> Enter Product Name</label>
            <input type="text" placeholder="" id="product_name" />
          </div>

          <div>
            <label htmlFor="Image">Image</label>
            <input type="text" placeholder="" id="Image" />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="" id="price" />
          </div>

          <div>
            <label htmlFor="description">Enter description</label>
            <textarea rows="5" placeholder="" id="description" />
          </div>

          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
    </CustomWrapper>
  );
  
  
  
};
