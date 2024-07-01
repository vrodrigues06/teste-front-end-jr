import React from "react";
import logo from "../../assets/Logo.png";

const BrandItem = () => {
  return (
    <div className="brandItemContainer">
      <img className="brandItemLogo" src={logo} alt="Logo da Empresa Vtex" />
    </div>
  );
};

export default BrandItem;
