import "./App.css";
import { Title } from "./Title.jsx";

function Description() {
  return <h3>This is description!</h3>;
}

function App() {
  return (
    <div>
      <div>
        {" "}
        <Title />
        <Description />
      </div>
      <div>
        <Title />
        <Description />
      </div>

      <Title />
      <Description />
    </div>
  );
}

export default App;
