import React from "react";

const ProductsTypeNav = () => {
  return (
    <nav>
      <ul className="productsTypeList">
        <li className="active">
          <a href="/celular">Celular</a>
        </li>
        <li>
          <a href="/acessorios">Acessórios</a>
        </li>
        <li>
          <a href="/tablets">Tablets</a>
        </li>
        <li>
          <a href="/notebooks">Notebooks</a>
        </li>
        <li>
          <a href="/tvs">TVs</a>
        </li>
        <li>
          <a href="/todos">Ver todos</a>
        </li>
      </ul>
    </nav>
  );
};

export default ProductsTypeNav;
