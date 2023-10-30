import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder="Enter First Name..." />
      <input type="text" onChange={handleLastNameChange} value={lastName} placeholder="Enter Last Name..." />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
