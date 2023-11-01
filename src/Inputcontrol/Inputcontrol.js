import React from "react";
import "./Inputcontrol.module.css";

function Inputcontrol(props) {
  return (
   
    <div className="container">
      {/* To create input box and receiving props from user*/}
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default Inputcontrol;