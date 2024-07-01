import React from "react";
import FooterNewsletter from "./FooterNewsletter";
import FooterAboutUs from "./FooterAboutUs";
import FooterInformation from "./FooterInformation";
import FooterPaymentInfo from "./FooterPaymentInfo";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="container footerWrapper">
          <nav className="footerNavContainer">
            <FooterAboutUs />
            <FooterInformation />
            <FooterPaymentInfo />
          </nav>
          <FooterNewsletter />
        </div>
      </div>
      <FooterCopyRight />
    </footer>
  );
};

export default Footer;
