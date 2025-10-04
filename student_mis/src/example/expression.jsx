import React from 'react';

export function Expression() {
  const hp = 218 * 1.36;
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white"
 
}
  return (
    <>
      <h1>Expression Examples 1</h1>
      <h2>My car</h2>
      <p>It has {218 * 1.36} horsepower</p>

      <h1>Expression Examples 2</h1>
      <h2>My car</h2>
      <p>It has {hp} horsepower</p> 

      <h1>Expression Examples 3</h1>
      <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
    </>
  );
}
