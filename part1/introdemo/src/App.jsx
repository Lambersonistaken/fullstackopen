/* eslint-disable react/prop-types */

const Hello = (props) => {

  return (
    <div>
      <p>Hello World for {props.name} and you are {props.age} years old</p>
    </div>
  )
}








const App = () => {

  const now = new Date()
  const a = 10;
  const b = 20;
  console.log(now, a+b);
  
  return (
    <>
      <div>
        <h1>Hello Worl it is {now.toString()}</h1>
        <p>{a} plus {b} equals {a+b}</p>
        <Hello name="Emir" age={a+b}/>
      </div>
    </>
  )
}

export default App
