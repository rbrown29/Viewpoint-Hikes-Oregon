import React from "react";
import "./style.css";

const HikeCard = ({ name, imageUrl, linkUrl }) => (
  <div
    className="card"
    style={{ backgroundImage: `url(${imageUrl})` }}
    onClick={() => window.open(linkUrl, "_blank")}
  >
    {name}
  </div>
);

export default HikeCard;
