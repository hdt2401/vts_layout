import React from "react";
import "./style.css";
import noImage from "../../assets/images/products/noProduct.svg";

function index({ name, image, price }) {
  return (
    <div className="item-container">
      <div className="item">
        <figure className="item-image">
          <img src={image ? image : noImage} alt={name} />
        </figure>
        <div className="item-info">
          <h3 className="item-name">{name}</h3>
          <span className="item-price">${price}</span>
        </div>
      </div>
    </div>
  );
}
export default index;
