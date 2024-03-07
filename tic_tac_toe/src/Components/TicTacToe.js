import styled from "styled-components/macro";
import Grid from "./Grid";

export default function TicTacToe({ gameData, isWon, onClick, playerNum }) {
  const paraText = isWon
    ? `Player ${isWon} has won the game!`
    : `Player ${playerNum}'s turn`;
  return (
    <Wrapper>
      <h1>Tic-Tac-Toe</h1>
      <P>{paraText}</P>
      <Grid {...{ gameData, isWon, onClick, playerNum }}></Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: white;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding-top: 20px;
`;

const P = styled.p`
  position: relative;
  left: -200px;
  font-size: 1.8rem;
`;
