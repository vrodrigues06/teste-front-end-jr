import React from "react";
import Button from "../ui/Button";

const ProductPanelItem = () => {
  return (
    <div className="productPanelContainer">
      <div className="productPanelContainerOverlay"></div>
      <div className="productPanelContent">
        <h1>Produtos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <Button type="partner">Confira</Button>
      </div>
    </div>
  );
};

export default ProductPanelItem;
