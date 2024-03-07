import styled from "styled-components/macro";

export default function Tile({ text, index, isSelected }) {
  return (
    <TileElement data-index={index} {...{ isSelected }}>
      {text}
    </TileElement>
  );
}

const TileElement = styled.div`
  background-color: ${({ isSelected }) =>
    isSelected ? "black" : "var(--grey)"};

  font-size: 5rem;
  font-weight: 800;
  color: white;
  border: 1px solid hsl(0deg 0% 60%);
  line-height: 1.5;
`;
