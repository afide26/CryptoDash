import React from "react";
import styled from "styled-components";
import { fontSize2, backgroundColor2 } from "./Styles";

const SearchInput = styled.input`
  place-self: center left;
  border: 1px solid;
  color: #1163c9;
  height: 25px;
  padding: 5px;
  border-radius: 3px;
  ${fontSize2}
  ${backgroundColor2}
`;

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;
export default function() {
  return (
    <SearchGrid>
      <h2>Search your favorite coin:</h2>
      <SearchInput />
    </SearchGrid>
  );
}
