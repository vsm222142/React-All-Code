
import './App.css'

// function square(a) {
//   return a * a;
// }

function App() {

  const myelement = (
    <>
      <p>I am para1</p>
      <p>I am para2</p>
    </>
  )
  const myname = "Vishal";
  // const city = prompt("Enter the City name : ");

  // const a = parseInt(prompt("Enter the first No. : "));
  // const b = parseInt(prompt("Enter the Second N0. : "));

  const car={
    name:"Totoyo",
    model: "600",
    color: "white"
  }

  const fruits=["mango","papaya","grapes","chiku","kiwi"];
  return (
    <>
      <h1>JSX Demo</h1>
      <h3>Name - {myname} </h3>
      {/* <h3>I am from {city} </h3> */}
      {/* <h3>Addition : {a + b}</h3>
      <h3>Subtract : {a - b}</h3>
      <h3>Multiplication : {a * b}</h3>
      <h3>Division : {a / b}</h3>
      <h3>Modules : {a % b}</h3> */}
      {myelement}
      {/* <h1> Square of {a} is {square(a)}</h1> */}

      <h1>Car Name = {car.name}</h1>
      <h1>{car.name} model is {car.model}</h1>
      <h1> {car.name } color is {car.color} </h1>
      <h2>{fruits}</h2>

      <h2> I am Having Fruits - {fruits.map((e)=>e+" ")}</h2>

    </>
  )
}

export default App
