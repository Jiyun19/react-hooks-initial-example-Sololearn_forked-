import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hello() {
  const [name, setName] = useState("David");

  return <h1>Hello {name}.</h1>;
}

const el = <Hello />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);