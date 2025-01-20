/* eslint-disable react/prop-types */


const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <div className='statistics'>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {props.all}</p>
        <p>Average: {props.average}</p>
        <p>Positive: {props.positive} %</p>
      </div>  
    </div>
  )
}

export default Statistics
