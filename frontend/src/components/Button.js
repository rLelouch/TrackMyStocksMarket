import React from 'react';
import '../styles/button.css';

function Button (props) {

  return (
    <button onClick={props.handleClick}>{props.textButton}</button>
  );
};

export default Button;