import React from "react";
import logo from "../../assets/Logo.png";

const Logo = () => {
  return (
    <a href="/" className="navigationLogo">
      <img
        className="navigationLogo"
        src={logo}
        alt="Logo do site VTEX, uma figura geométrica"
      />
    </a>
  );
};

export default Logo;
