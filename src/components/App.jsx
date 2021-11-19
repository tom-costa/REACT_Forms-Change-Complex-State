import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function inputOnChange(event) {
    if (event.target.name === "fName") {
      firstName();
    }
    if (event.target.name === "lName") {
      lastName();
    }
    if (event.target.name === "email") {
      emailContact();
    }
  }

  function firstName() {
    setContact({
      fName: event.target.value,
      lName: contact.lName,
      email: contact.email
    });
    console.log(event.target.value);
  }

  function lastName() {
    setContact({
      fName: contact.fName,
      lName: event.target.value,
      email: contact.email
    });
  }

  function emailContact() {
    setContact({
      fName: contact.fName,
      lName: contact.lName,
      email: event.target.value
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={inputOnChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={inputOnChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={inputOnChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
