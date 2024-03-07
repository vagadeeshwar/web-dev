import styled from "styled-components";
import Tile from "./Tile";

let tileNum = "-1";

export default function Grid({ gameData, onClick, playerNum }) {
  const gameDataCopy = JSON.parse(JSON.stringify(gameData));

  function handleClick(e) {
    tileNum = e.target.dataset.index;

    const data = gameDataCopy[Number(tileNum)];
    if (!data.selected) {
      if (playerNum === "1") {
        data.text = "X";
        data.selected = true;
        onClick.setPlayerNum("2");
      } else {
        data.text = "O";
        data.selected = true;
        onClick.setPlayerNum("1");
      }
    }

    // console.log(gameDataCopy);
    onClick.setGameData(gameDataCopy);
    onClick.setIsWon(calculateWon(gameDataCopy));
  }

  return (
    <GridWrapper onClick={handleClick}>
      {gameData.map(({ key, text }, index) => (
        <Tile
          {...{ key, text }}
          index={index.toString()}
          isSelected={index.toString() === tileNum ? true : false}
        ></Tile>
      ))}
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 400px;
  height: 400px;
  text-align: center;
`;

function calculateWon(gameDataCopy) {
  const string = gameDataCopy.map((data) => data.text).join("");
  console.log(string);
  for (let i = 0; i < 3; i++)
    if (string.slice(3 * i, 3 * (i + 1)) === "XXX") return "1";
  for (let i = 0; i < 3; i++)
    if (string.slice(3 * i, 3 * (i + 1)) === "OOO") return "2";
  if (
    string[0] + string[3] + string[6] === "XXX" ||
    string[1] + string[4] + string[7] === "XXX" ||
    string[2] + string[5] + string[8] === "XXX" ||
    string[0] + string[4] + string[8] === "XXX" ||
    string[2] + string[4] + string[6] === "XXX"
  )
    return "1";
  if (
    string[0] + string[3] + string[6] === "OOO" ||
    string[1] + string[4] + string[7] === "OOO" ||
    string[2] + string[5] + string[8] === "OOO" ||
    string[0] + string[4] + string[8] === "OOO" ||
    string[2] + string[4] + string[6] === "OOO"
  )
    return "2";
  return "";
}
