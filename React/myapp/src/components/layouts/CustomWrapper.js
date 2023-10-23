import Styles from './CustomWrapper.module.css'
function CustomWrapper (props){
    return <div className={Styles.CustomWrapper}>
      {props.children}
    </div>

}

export default CustomWrapper;