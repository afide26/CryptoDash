import React from "react";
export const AppContext = React.createContext();
const cc = require("cryptocompare");
export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "settings",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = await cc.coinList();
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
