import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTaks = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValues = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      });
    });
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValues}
      />
      <br />
      <br />
      <button onClick={addNewTaks}> Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <button onClick={() => upperCaseOne(todo.id)}>
                Upper Case One
              </button>
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>Upper Case All</button>
    </div>
  );
}
