import React from "react";
import "./Warehouse.css";
import Gallery from "../Gallery/Gallery.jsx";

const Warehouse = (props) => {
  return (
    <>
      <div id="logo">
        <h1>
          <i> STARK INDUSTRIES</i>
        </h1>
        <p></p>
      </div>
      <div className="gallery">
        <Gallery suits={props.suits} />
      </div>
      <div id="circle1">
        <div id="inner-cirlce1"></div>
      </div>
    </>
  );
    
};

export default Warehouse;
