import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <section className="promotionBackground">
      <div className="promotionBackgroundOverlay"></div>
      <div className="promotionContent container">
        <h1>
          Venha conhecer nossas <br /> promoções
        </h1>
        <h3>50% Off nos produtos</h3>
        <Button type="primary">Ver produto</Button>
      </div>
    </section>
  );
};

export default Banner;
