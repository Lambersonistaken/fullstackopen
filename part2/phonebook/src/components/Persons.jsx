/* eslint-disable react/prop-types */


const Persons = (props) => {
  return (
    <div>
      {props.search === '' ? props.persons.map(person => <p key={person.id}>{person.name} {person.number}</p>) : props.persons.filter(person => person.name.toLowerCase().includes(props.search.toLowerCase())).map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Persons
