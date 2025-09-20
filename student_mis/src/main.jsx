
//import { createRoot } from 'react-dom/client'

//const myElement = <h1>EXAMPLE 1: I Love JSX!</h1>;

//createRoot(document.getElementById('root')).render(
  //myElement
//);

import React from 'react';
import { createRoot, createElement } from 'react-dom/client'

const myElement = React.createElement('h1', {}, ' Example 2: I do not use JSX!');

createRoot(document.getElementById('root')).render(
  myElement
);