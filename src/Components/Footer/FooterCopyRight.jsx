import React from "react";
import econverse from "../../assets/footer-icons/footerBrand-econverse.svg";
import vtex from "../../assets/footer-icons/footerBrand-vtex.svg";

const FooterCopyRight = () => {
  return (
    <div className="copyRightContainer container">
      <p>
        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
        imagens são de propriedade de seus respectivos donos. É vedada a
        reprodução, total ou parcial, de qualquer conteúdo sem expressa
        autorização.
      </p>
      <div className="copyRightBrands">
        <img src={econverse} alt="Logo da Empresa Econverse" />
        <img src={vtex} alt="Logo da Empresa Econverse" />
      </div>
    </div>
  );
};

export default FooterCopyRight;
