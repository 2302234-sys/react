
function App() {
  const myElement = <h5>Hello World</h5>

  const myElement2 =<h5>The result of 5 +5 is {5 + 5}</h5>
  
  const name = "Precious"
  const age  = 21 
  return (
    <>
      {myElement}
      {myElement2}
      <h5>Hello, {name}</h5>
      <h5>You are {age} years old</h5>
      <Button/>
    </>
  )
}

function Button(){
  return(
    <>
    <button>Click Me</button>
    </>
  )
}
export default App
