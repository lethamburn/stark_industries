import React from "react";
import "./Gallery.css";

const Gallery = (props) => {
  return (
    <>
      <div className="container">
        {props.suits.map((suit) => {
          return (
            <div
              style={{ backgroundImage: `url("${suit.image}")` }}
              className="card card0"
              key={JSON.stringify(suit)}
            >
              <div className="border">
                <h2>{suit.name}</h2>
                <p>{suit.description}</p>
                <h3>
                  Status: <span>{suit.status}</span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Gallery;
