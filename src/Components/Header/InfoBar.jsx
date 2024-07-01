import React from "react";
import shieldCheck from "../../assets/icons/ShieldCheck.svg";
import truck from "../../assets/icons/Truck.svg";
import creditCard from "../../assets/icons/CreditCard.svg";

const InfoBar = () => {
  return (
    <aside className="headerInfoBar">
      <div>
        <img src={shieldCheck} alt="escudo indicando que a compra é segura" />
        <p>
          Compra <span>100% segura</span>
        </p>{" "}
      </div>
      <div>
        <img src={truck} alt="escudo indicando que a compra é segura" />
        <p>
          {" "}
          <span>Frete grátis </span> acima de R$ 200
        </p>
      </div>
      <div>
        {" "}
        <img src={creditCard} alt="escudo indicando que a compra é segura" />
        <p>
          {" "}
          <span>Parcele </span> suas compras{" "}
        </p>
      </div>
    </aside>
  );
};

export default InfoBar;
