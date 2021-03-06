import React from "react";
import {Col} from "./Grid/Col";
const Geometric = props => (
	<Col size="md-3">
	<div className="card">
	  <div className="img-container">
		<img alt={props.alt} src={props.image} onClick={props.play} data-clicked="false" />
	  </div>
	 	 
	</div>
	</Col>
  );
  
  export default Geometric;
