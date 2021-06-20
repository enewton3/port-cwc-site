import React from "react";
import fifty from "../assets/50years.png";

export default function Fifty() {
  return (
    <img
      src={fifty}
      alt="Fifty Years Logo"
      style={{
        position: "absolute",
        right: "2vw",
        bottom: "2vh",
        width: "15vw",
      }}
    />
  );
}
