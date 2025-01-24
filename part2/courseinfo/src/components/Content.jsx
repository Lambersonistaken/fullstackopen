import Part from "./Part"


const Content = (props) => {
  return (
    <div>
        <Part partcount={props.parts[0].name} exercisecount={props.parts[0].exercises} />
        <Part partcount={props.parts[1].name} exercisecount={props.parts[1].exercises} />
        <Part partcount={props.parts[2].name} exercisecount={props.parts[2].exercises} />
    </div>
  )
}

export default Content
