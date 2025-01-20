/* eslint-disable react/prop-types */
import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <div className='statistics'>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} />
      </div>  
    </div>
  )
}

export default Statistics
