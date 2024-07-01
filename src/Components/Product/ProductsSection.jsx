import React from "react";
import Title from "../ui/Title";
import ProductsTypeNav from "./ProductsTypeNav";
import Products from "./Products";

const ProductsRelated = () => {
  return (
    <section className="container">
      <Title>Produtos relacionados</Title>
      <ProductsTypeNav />
      <Products />
    </section>
  );
};

export default ProductsRelated;
