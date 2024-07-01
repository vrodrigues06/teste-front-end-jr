import React from "react";
import Button from "../ui/Button";

const FooterNewsLetter = () => {
  return (
    <div className="footerNewsletterContainer">
      <h1>
        Cadastre-e e receba nossas
        <br />
        <strong>Novidades e Promoções</strong>
      </h1>
      <p>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </p>
      <div>
        <input type="email" placeholder="SEU E-MAIL" />
        <Button type="newsletter">OK</Button>
      </div>
    </div>
  );
};

export default FooterNewsLetter;
