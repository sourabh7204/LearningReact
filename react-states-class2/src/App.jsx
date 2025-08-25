import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <Lottery n={3} winningSum={15} />
    </div>
  );
}

export default App;
