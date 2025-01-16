import Part from "./Part"


const Content = (props) => {
  return (
    <div>
        <Part partcount={props.part1} exercisecount={props.exercises1} />
        <Part partcount={props.part2} exercisecount={props.exercises2} />
        <Part partcount={props.part3} exercisecount={props.exercises3} />
    </div>
  )
}

export default Content
