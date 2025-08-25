import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Ticket from "./Ticket";

function App() {
  return (
    <div>
      <Ticket ticket={[0, 1, 2]} />
      <Ticket ticket={[5, 2, 1, 0, 8]} />
    </div>
  );
}

export default App;
