import React from 'react';

export function Attribute(){
     const x = "myclass";

  return (
    <> 
      <h1>Attributes Example</h1>
      <h2 className="myclass">Hello World</h2>
       <h1 className={x}>Hello World</h1>
    </>
  );
}
