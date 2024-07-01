import React from "react";
import crown from "../../assets/icons/sectionNavIconCrownSimple.svg";

const SectionsNavigation = () => {
  return (
    <nav className="container sectionsNavigation">
      <ul>
        <li>
          <a href="/todos">Todas Categorias</a>
        </li>
        <li>
          <a href="/supermercado">Supermercado</a>
        </li>
        <li>
          <a href="/livros">Livros</a>
        </li>
        <li>
          <a href="/moda">Moda</a>
        </li>
        <li>
          <a href="/lancamentos">Lançamentos</a>
        </li>
        <li className="activeSectionNav">
          <a href="/ofertas" aria-current="page">
            Ofertas do dia
          </a>
        </li>
        <li>
          <a className="subscription" href="/assinatura">
            <img src={crown} alt="Ícone de Coroa para Assinatura" />
            Assinatura
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SectionsNavigation;
