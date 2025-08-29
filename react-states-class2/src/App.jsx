import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import { sum } from "./helper";
import Form from "./Form";
import CommentsForm from "./CommentsForm";

//Function For Ticket
// function App() {
//   let winCondition = (ticket) => {
//     return sum(ticket) == 15;
//   };

//   return (
//     <div>
//       <Lottery n={3} winCondition={winCondition} />
//     </div>
//   );
// }

//Funtion for Form
function App() {
  return <CommentsForm />;
}

export default App;
