import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5));

  const handleNewContact = () => {
    const randomIndex = Math.round(
      Math.random() * (contactsArr.length - 1 - 5) + 5
    );
    const contactsCopy = [...contacts];
    contactsCopy.push(contactsArr[randomIndex]);
    setContacts(contactsCopy);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleNewContact}>Adds contacts</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>wonOscar</th>
          <th>wonEmmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map((elem) => {
          return (
            <tr>
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
                <button>Delete</button>
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
