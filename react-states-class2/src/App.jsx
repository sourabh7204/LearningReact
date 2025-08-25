import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) == 15;
  };

  return (
    <div>
      <Lottery n={3} winCondition={winCondition} />
    </div>
  );
}

export default App;
