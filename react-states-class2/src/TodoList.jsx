import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState({});
  let [newTodo, setNewTodo] = useState("");

  let addNewTaks = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  let updateTodoValues = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValues}
      ></input>
      <br />
      <br />
      <button onClick={addNewTaks}> Add Taks</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />

      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
