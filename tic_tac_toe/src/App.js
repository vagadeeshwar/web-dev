import TicTacToe from "./Components/TicTacToe";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styled from "styled-components/macro";

export default function App() {
  const [gameData, setGameData] = useState([
    {
      text: "",
      selected: false,
      key: uuidv4(),
    },
    {
      text: " ",
      key: uuidv4(),
      selected: false,
    },
    {
      text: " ",
      key: uuidv4(),
      selected: false,
    },
    {
      text: " ",
      key: uuidv4(),
      selected: false,
    },
    {
      text: " ",
      key: uuidv4(),
      selected: false,
    },
    {
      text: " ",
      key: uuidv4(),
      selected: false,
    },
    {
      text: " ",
      key: uuidv4(),
      selected: false,
    },
    {
      text: " ",
      key: uuidv4(),
    },
    {
      text: " ",
      key: uuidv4(),
      selected: false,
    },
  ]);
  const [playerNum, setPlayerNum] = useState("1");

  const [isWon, setIsWon] = useState("");

  return (
    <>
      {isWon ? <BackDrop /> : <></>}
      <TicTacToe
        gameData={gameData}
        isWon={isWon}
        onClick={{ setGameData, setPlayerNum, setIsWon }}
        playerNum={playerNum}
      ></TicTacToe>
    </>
  );
}

const BackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
