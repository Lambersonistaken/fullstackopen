import Part from "./Part"


const Content = (props) => {
  return (
    <div>
        {props.parts.map(part => <Part key={part.id} partcount={part.name} exercisecount={part.exercises} />)}
    </div>
  )
}

export default Content
