/* eslint-disable react/prop-types */


const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleFunc}>{props.buttonText}</button>
    </div>
  )
}

export default Button
