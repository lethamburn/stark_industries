import React from "react";
import { Warehouse } from "./components";
import "./App.css";

const STARK_SUITS = [
  {
    name: "Mark I",
    image: "https://i.imgur.com/JFjBWs5.jpg",
    description:
      "The Mark I Armor was Tony Stark's first Iron Man suit, built to help him escape from forced captivity by the Ten Rings. The suit was crafted from the limited resources around him, including salvaged pieces of scrap metal and machine parts.",
    status: "Destroyed",
  },
  {
    name: "Mark II",
    image: "https://i.imgur.com/jtAv2IM.jpg",
    description:
      "The Mark II Armor was Tony Stark's second Iron Man suit, heavily refining the bulky and rudimentary design of the previous Mark I suit into a more articulated and sleek design. However, due to a dangerous icing problem that immobilized the suit at higher altitudes, Stark replaced the suit with the Mark III armor. The Mark II was later acquired by James Rhodes and repurposed into the War Machine Armor: Mark I.",
    status: "Destroyed",
  },
  {
    name: "Mark III",
    image: "https://i.imgur.com/tHUGygY.jpg",
    description:
      "The Mark III Armor was Tony Stark's third Iron Man suit and an upgrade from the Mark II, improving on its previous flaws. It was the first suit to integrate an advanced on-board weapons system and was the first to adopt the classic red and gold color scheme.",
    status: "Destroyed",
  },
  {
    name: "Mark IV",
    image: "https://i.imgur.com/gtdWnsh.jpg",
    description:
      "The Mark IV Armor was Tony Stark's fourth Iron Man suit and was built to replace the Mark III after it was heavily damaged in Stark's fight with Obadiah Stane. Because it was built to be a direct replacement, the Mark IV is very similar to the Mark III with only a few minor changes.",
    status: "Destroyed",
  },
];

function App() {
  return (
    <div>
      <Warehouse />
    </div>
  );
}

export default App;

/* return (
    <>
      {STARK_SUITS.map((suit) => {
        return (
          <div key={JSON.stringify(suit)}>
            <h4>{suit.name}</h4>
            <img src={suit.image} alt="Mark I" width="200" />
            <p>{suit.description}</p>
            <p>Status: {suit.status}</p>
          </div>
        );
      })}
    </>
  ); */
