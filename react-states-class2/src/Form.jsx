import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("Sourabh");

  let handleNameChange = (event) => {
    console.log(event.target.value);
    setFullName(event.target.value);
  };

  return (
    <form action="">
      <label htmlFor="username">Full Name</label>
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter full name"
        value={fullName}
        onChange={handleNameChange}
        id="username"
      />
      <button>Submit</button>
    </form>
  );
}
