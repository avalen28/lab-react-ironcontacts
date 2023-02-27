import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5));

  const handleNewContact = () => {
    const contactsCopy = [...contacts];
    const randomIndex = Math.round(
      Math.random() * (contactsArr.length - 1 - 5) + 5
    );
    contactsCopy.push(contactsArr[randomIndex]);
    setContacts(contactsCopy);
  };

  const handleDeleteContact = (id) => {
    let contactsCopy = [...contacts];
    const filteredArr = contactsCopy.filter((elem) => elem.id !== id);
    setContacts(filteredArr);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleNewContact}>Adds contacts</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>wonOscar</th>
            <th>wonEmmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((elem) => {
            return (
              <tr key={elem.id}>
                <th>
                  <img
                    src={elem.pictureUrl}
                    alt={`${elem.name} profile`}
                    width="75px"
                  />
                </th>
                <th>{elem.name}</th>
                <th>{elem.popularity.toPrecision(4)}</th>
                <th>{elem.wonOscar ? "🏆" : ""}</th>
                <th>{elem.wonEmmy ? "🏆" : ""}</th>
                <th>
                  <button onClick={() => handleDeleteContact(elem.id)}>
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
