import React from "react";

const Geometric = props => (
	<div className="card">
	  <div className="img-container">
		<img alt="There was an issue showing this image" src={props.image} />
	  </div>
	  
	  <span onClick={() => props.removeFriend(props.id)} className="remove">
		𝘅
	  </span>
	</div>
  );
  
  export default Geometric;
