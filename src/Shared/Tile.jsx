import styled from "styled-components";
import {
  fontSize2,
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow
} from "../Settings/Styles";

export const Tile = styled.div`
  ${fontSize2}
  padding: 10px;
  text-align: left;
  ${subtleBoxShadow}
  ${lightBlueBackground}
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    ${greenBoxShadow}
    cursor:pointer;
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;
