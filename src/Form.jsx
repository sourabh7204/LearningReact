function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form was submitted");
}

//Form function
export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Type something" />
      <button type="submit">Submit</button>
    </form>
  );
}
