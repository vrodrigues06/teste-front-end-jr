import React from "react";
import visa from "../../assets/footer-icons/payment/visa.svg";
import elo from "../../assets/footer-icons/payment/elo.svg";
import alelo from "../../assets/footer-icons/payment/alelo.svg";
import dinners from "../../assets/footer-icons/payment/dinners.svg";
import ifood from "../../assets/footer-icons/payment/ifood.svg";
import mastercard from "../../assets/footer-icons/payment/mastercard.svg";
import pix from "../../assets/footer-icons/payment/pix.svg";
import amex from "../../assets/footer-icons/payment/amex.svg";
import ticket from "../../assets/footer-icons/payment/ticket.svg";
import sodexo from "../../assets/footer-icons/payment/sodexo.svg";

const FooterPaymentInfo = () => {
  return (
    <div className="footerNavPaymentsInfo">
      <h3>Formas de pagamento</h3>
      <ul className="footerNavPaymentsGrid">
        <li>
          <img src={visa} alt="Ícone da empresa VISA" />
        </li>
        <li>
          <img src={elo} alt="Ícone da empresa Elo" />
        </li>
        <li>
          <img src={alelo} alt="Ícone da empresa Alelo" />
        </li>
        <li>
          <img src={dinners} alt="Ícone da empresa Dinners" />
        </li>
        <li>
          <img src={ifood} alt="Ícone da empresa iFood" />
        </li>
        <li>
          <img src={mastercard} alt="Ícone da empresa Mastercard" />
        </li>
        <li>
          <img src={pix} alt="Ícone do método de pagamento PIX" />
        </li>
        <li>
          <img src={amex} alt="Ícone da empresa American Express" />
        </li>
        <li>
          <img src={ticket} alt="Ícone da empresa Ticket" />
        </li>
        <li>
          <img src={sodexo} alt="Ícone da empresa Sodexo" />
        </li>
      </ul>
    </div>
  );
};

export default FooterPaymentInfo;
