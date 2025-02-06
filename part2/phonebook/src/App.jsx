import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-123456'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {

    if(persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return;
    }


    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input onChange={handleSearchChange} value={search} />
      </div>

      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br />
          number : <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {search === '' ? persons.map(person => <p key={person.name}>{person.name} {person.number}</p>) : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())).map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App