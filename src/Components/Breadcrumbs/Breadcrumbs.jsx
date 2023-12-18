import React from "react";
import "./Breadcrumbs.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
export const Breadcrumbs = (props) => {
  const { product } = props;
  console.log(product);
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};
