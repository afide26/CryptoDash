import React from "react";
export const AppContext = React.createContext();
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
    console.log(this.state);
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
