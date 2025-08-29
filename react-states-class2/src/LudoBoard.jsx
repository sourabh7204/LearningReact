import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    red: 0,
    green: 0,
  });

  let [arr, SetArr] = useState(["no moves"]);

  let UpdateBlue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });

    SetArr((prevArr) => {
      return [...prevArr, " blue moves"];
    });
    console.log(arr);
  };

  let UpdateRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };

  let UpdateYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };

  let UpdateGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue moves={moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={UpdateBlue}>
          +1
        </button>
        <p>Yellow moves={moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={UpdateYellow}
        >
          +1
        </button>
        <p>Green moves={moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={UpdateGreen}>
          +1
        </button>
        <p>Red moves={moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={UpdateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
