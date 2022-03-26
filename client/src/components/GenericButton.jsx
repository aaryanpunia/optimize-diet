import React from 'react';
import "../static/css/GenericButton.css";
import { useNavigate } from "react-router-dom";


function GenericButton(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = props.pathto;
    navigate(path);
  }
  return (
    <button className="ButtonElem" onClick={routeChange}>
      {props.text}
    </button>
  );
}

export default GenericButton;