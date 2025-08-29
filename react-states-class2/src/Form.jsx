import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  // //Name Change Method
  // let handleNameChange = (event) => {
  //   console.log(event.target.value);
  //   setFullName(event.target.value);
  // };

  // //UserName Change Method
  // let handleUsername = (event) => {
  //   console.log(event.target.value);
  //   setUsername(event.target.value);
  // };

  //Handle Input Chnage Method
  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;
    // console.log(newValue); //fullName

    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({ fullName: "", username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter full name"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <br />
      <label htmlFor="username">Username</label>
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter Username"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      &nbsp;&nbsp;&nbsp;
      <input
        type="password"
        placeholder="Enter Password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </form>
  );
}
