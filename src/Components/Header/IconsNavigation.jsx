import React from "react";
import navIconPedidos from "../../assets/icons/navIconPedidos.svg";
import navIconHeart from "../../assets/icons/navIconHeart.svg";
import navIconUserCircle from "../../assets/icons/navIconUserCircle.svg";
import navIconShoppingCart from "../../assets/icons/navIconShoppingCart.svg";

const IconsNavigation = () => {
  return (
    <nav className="navigationIcons">
      <a href="">
        {" "}
        <img src={navIconPedidos} alt="Ícone de pedidos" />{" "}
      </a>
      <a href="">
        {" "}
        <img src={navIconHeart} alt="Ícone de Favoritos" />{" "}
      </a>
      <a href="">
        {" "}
        <img src={navIconUserCircle} alt="Ícone de Usuário" />{" "}
      </a>
      <a href="">
        {" "}
        <img
          src={navIconShoppingCart}
          alt="Ícone de Carrinho de Compras"
        />{" "}
      </a>
    </nav>
  );
};

export default IconsNavigation;
