/* eslint-disable react/prop-types */


const Filter = (props) => {
  return (
    <div>
      <div>
        filter shown with <input onChange={props.handleSearchChange} value={props.search} />
      </div>
    </div>
  )
}

export default Filter
