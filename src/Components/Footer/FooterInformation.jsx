import React from "react";

const FooterInformation = () => {
  return (
    <div className="footerNavInformation">
      <h3>Informações Úteis</h3>

      <ul className="footerNavList">
        <li>
          <a href="/fale-conosco">Fale Conosco</a>
        </li>
        <li>
          <a href="/duvidas">Dúvidas</a>
        </li>
        <li>
          <a href="/prazos-entrega">Prazos de entrega</a>
        </li>
        <li>
          <a href="/formas-pagamento">Formas de pagamento</a>
        </li>
        <li>
          <a href="/politica-privacidade">Política de privacidade</a>
        </li>
        <li>
          <a href="/trocas-devolucoes">Trocas e devoluções</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterInformation;
