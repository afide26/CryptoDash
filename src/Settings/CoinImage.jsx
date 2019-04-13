import React from "react";

export default function({ coin, style }) {
  return (
    <img
      alt={coin.Symbol}
      style={
        style || {
          height: "50px",
          display: "block",
          marginTop: "10px",
          marginLeft: "auto"
        }
      }
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
}
