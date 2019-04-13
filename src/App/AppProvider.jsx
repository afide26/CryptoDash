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
      ...this.savedSettings(),
      favorites: ["BTC", "ETH", "XMR", "ETC", "DOGE"],
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites
    };
  }

  componentDidMount() {
    this.fetchCoins();
    console.log(this.state);
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
  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard"
    });

    localStorage.setItem(
      "cryptodash",
      JSON.stringify({ test: "hello", firstVisit: true })
    );
  };
  setPage = page => this.setState({ page });

  savedSettings = () => {
    let cryptoDashData = localStorage.getItem("cryptodash");
    return !cryptoDashData ? { page: "settings", firstVisit: true } : {};
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
