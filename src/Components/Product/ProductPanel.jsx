import React from "react";
import ProductPanelItem from "./ProductPanelItem";
import Title from "../ui/Title";

const ProductPanel = () => {
  return (
    <section className="container ">
      <Title>Produtos Relacionados</Title>
      <a className="productPanelShowAll" href="">
        Ver todos
      </a>
      <div className="productPanelWrapper">
        <ProductPanelItem />
        <ProductPanelItem />
      </div>
    </section>
  );
};

export default ProductPanel;
