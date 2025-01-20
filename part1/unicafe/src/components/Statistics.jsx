/* eslint-disable react/prop-types */
import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
  return (
    <div>
      <div className='statistics'>
        <table style={{marginTop: '20px'}}>
          <thead>
            <tr>
              <th>Statistics</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><StatisticLine text='Good' value={props.good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Neutral' value={props.neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Bad' value={props.bad} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='All' value={props.all} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Average' value={props.average} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Positive' value={props.positive} /></td>
          </tr>
          </tbody>
          
        </table>
      </div>  
    </div>
  )
}

export default Statistics
