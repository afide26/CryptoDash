import React from "react";
import styled from "styled-components";
import { fontSize2, backgroundColor2 } from "./Styles";
import { AppContext } from "../App/AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";

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

const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {
  // Get all coin symbols
  let coinSymbols = Object.keys(coinList);
  // Get all coin names and map the symbol to the coin name
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);

  // Combine coinNames and coinSymbols
  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);
  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let CoinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, CoinName)
    );
  });
  console.log(filteredCoins);
  setFilterCoins(filteredCoins);
}, 500);

// Add the custom function for searching coins
function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <h2>Search your favorite coin:</h2>
          <SearchInput
            onKeyUp={e => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}
