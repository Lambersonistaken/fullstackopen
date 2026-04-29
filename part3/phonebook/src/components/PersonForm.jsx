/* eslint-disable react/prop-types */


const PersonForm = (props) => {

    return (
    <div>
      <form>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange} />
          <br />
          number : <input value={props.newNumber} onChange={props.handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={props.handleSubmit}>add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
