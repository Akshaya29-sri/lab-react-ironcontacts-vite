import "./App.css";
import {useState} from "react";
import contacts from "./contacts.json";

function App() {
  const [contact,setContact]=useState(contacts.slice(0,5));
  return (
    <div className="App">
      <h1> IronContacts</h1>
      <table>
        <thead>
        <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        </tr>
        </thead>
        <tbody>
          {contact.map((contact)=>(
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>
))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
