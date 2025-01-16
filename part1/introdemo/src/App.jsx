/* eslint-disable react/prop-types */

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
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
        <Hello name="Maya" age={26 + 10} />
      </div>
    </>
  )
}

export default App
