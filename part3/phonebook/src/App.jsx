import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";
import Error from "./components/Error";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    if (persons.find((person) => person.name === newName)) {
      event.preventDefault();
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        const person = persons.find((p) => p.name === newName);
        const changedPerson = { ...person, number: newNumber };

        personService
          .replaceState(person.id, changedPerson)
          .then((response) => {
            setPersons(
              persons.map((p) => (p.id !== person.id ? p : response.data)),
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setErrMessage(
              `Information of ${person.name} ${error} has already been removed from server`,
            );
            setTimeout(() => {
              setErrMessage(null);
            }, 3000);
          });
      } else {
        return;
      }
    }

    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    personService.create(personObject).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
      setNewNumber("");
      setSuccessMessage(`Added ${personObject.name}`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this number?")) {
      personService.deleteNumber(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Error message={errMessage} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <Filter handleSearchChange={handleSearchChange} search={search} />
      <h2>Numbers</h2>
      <Persons search={search} persons={persons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
