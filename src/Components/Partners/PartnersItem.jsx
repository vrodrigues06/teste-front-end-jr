import React from "react";
import Button from "../ui/Button";

const PartnersItem = () => {
  return (
    <div className="partnerContainer">
      <div className="partnerContainerOverlay"></div>
      <div className="partnerContent">
        <h1>Parceiros</h1>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <Button type="partner">Confira</Button>
      </div>
    </div>
  );
};

export default PartnersItem;
