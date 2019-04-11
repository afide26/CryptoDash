import styled from "styled-components";
import { fontSize1 } from "../Settings/Styles";
import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow
} from "../Settings/Styles";

export const Tile = styled.div`
  ${fontSize1}
  padding: 10px;
  text-align: center;
  ${subtleBoxShadow}
  ${lightBlueBackground}
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    ${greenBoxShadow}
    cursor:pointer;
  }
`;
