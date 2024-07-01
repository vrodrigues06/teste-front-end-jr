import React from "react";
import facebook from "../../assets/footer-icons/facebook.svg";
import instagram from "../../assets/footer-icons/instagram.svg";
import youtube from "../../assets/footer-icons/youtube.svg";

const FooterAboutUs = () => {
  return (
    <div className="footerNavAboutUs">
      <h3>Sobre nós</h3>

      <ul className="footerNavList">
        <li>
          <a href="/conheca">Conheça</a>
        </li>
        <li>
          <a href="/como-comprar">Como comprar</a>
        </li>
        <li>
          <a href="/indicacao-desconto">Indicação e desconto</a>
        </li>
      </ul>

      <div className="footerNavSocialIcons">
        <div>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <img src={facebook} alt="Ícone do Facebook" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com" aria-label="Instagram">
            <img src={instagram} alt="Ícone do Instagram" />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com" aria-label="Youtube">
            <img src={youtube} alt="Ícone do Youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterAboutUs;
