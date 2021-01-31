import React from "react";

function CityData({ image, name }) {
  return (
    <div
      className="widget-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="widget-city-name-container">
        <div className="widget-city-name">{name}</div>
      </div>
      <div className="widget-city-link-container">
        <a
          target="_blank"
          href={`https://www.google.com/search?q=${name}&oq=${name}`}
        >
          VISIT PLACE
        </a>
      </div>
    </div>
  );
}

export default CityData;
