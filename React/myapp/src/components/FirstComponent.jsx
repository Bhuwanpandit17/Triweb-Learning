 
function FirstComponent(props){
    return (
      <div>
        <h1> {props.owner} Application</h1>
        <p>Its application for the react app - {props.reason}</p>
        <button>Click here</button>
      </div>
    );
}

export default FirstComponent;

