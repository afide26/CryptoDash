import React from "react";
import _ from "lodash";
export const AppContext = React.createContext();
const cc = require("cryptocompare");

const MAX_COIN = 10;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "settings",
      favorites: ["BTC", "ETH", "XMR", "ETC", "DOGE"],
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      setFilteredCoins: this.setFilteredCoins,
      setCurrentFavorite: this.setCurrentFavorite
    };
  }

  componentDidMount() {
    this.fetchCoins();
    this.fetchPrices();
  }

  // Add and Remove Coins
  addCoin = key => {
    // Clone the favorites state;
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_COIN && favorites.indexOf(key) === -1) {
      favorites.push(key);
      this.setState({ favorites });
    } else if (favorites.length >= MAX_COIN) {
      alert("You already reached the limit of coins to save as favorites");
      return favorites;
    }
  };

  removeCoin = key => {
    let favorites = [...this.state.favorites];
    this.setState({ favorites: _.pull(favorites, key) });
  };

  isInFavorites = key => _.includes(this.state.favorites, key);

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  fetchPrices = async () => {
    if (this.state.firsVisit) return;
    let prices = await this.prices();
    console.log(prices);
    this.setState({ prices });
  };

  prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], "AUD");
        returnData.push(priceData);
      } catch (e) {
        console.warn("Fetch price error: ", e);
      }
    }
    return returnData;
  };

  setCurrentFavorite = sym => {
    this.setState({ currentFavorite: sym });

    localStorage.setItem(
      "cryptodash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptodash")),
        currentFavorite: sym
      })
    );
  };
  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0];
    this.setState(
      {
        firstVisit: false,
        page: "dashboard",
        currentFavorite
      },
      () => {
        this.fetchPrices();
      }
    );

    localStorage.setItem(
      "cryptodash",
      JSON.stringify({ favorites: this.state.favorites, currentFavorite })
    );
  };

  savedSettings = () => {
    let cryptoDashData = localStorage.getItem("cryptodash");
    if (!cryptoDashData) {
      return { page: "settings", firstVisit: true };
    }
    // Override the default favorites
    let { favorites, currentFavorite } = JSON.parse(cryptoDashData);
    return { favorites, currentFavorite };
  };

  setPage = page => this.setState({ page });

  // Add function for filtering search results
  setFilteredCoins = filteredCoins => this.setState({ filteredCoins });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
