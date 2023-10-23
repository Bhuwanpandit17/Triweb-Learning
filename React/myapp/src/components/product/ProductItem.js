// import Styles from './ProductItem.module.css'
import CustomerWrapper from '../layouts/CustomWrapper'
function ProductItem (props){
    return (
      <li key={props.item.id}>
        <CustomerWrapper>
          <div>
            <div>
              <img src="" alt="No found" />
            </div>
            <div>
              <h2>{props.item.product_name}</h2>
              <p> {props.item.description}</p>
              <h4>{props.item.price}</h4>
            </div>
            <div>
              {" "}
              <button>Buy now</button>
            </div>
          </div>
        </CustomerWrapper>
      </li>
    );
}

export default ProductItem;