import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>wonOscar</th>
          <th>wonEmmy</th>
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
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
