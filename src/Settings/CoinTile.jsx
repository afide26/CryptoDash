import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DisabledTile, DeletableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "./CoinImage";
export default function({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
<<<<<<< HEAD
      {({ coinList, addCoin, removeCoin, isInFavorites }) => {
=======
      {({ coinList }) => {
>>>>>>> d743240176c265bbd5947efa309076fa69d763bf
        let coin = coinList[coinKey];
        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        } else if (isInFavorites(coinKey)) {
          TileClass = DisabledTile;
        }
        return (
          <TileClass>
            <CoinHeaderGrid
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
