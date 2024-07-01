import React from "react";
import Title from "../ui/Title";
import BrandItem from "./BrandItem";
import rightArrow from "../../assets/rightArrow.svg";

const Brand = () => {
  return (
    <section className="container">
      <Title type="brand"> Navegue por marcas </Title>
      <div className="brandWrapper">
        <ul className="brandLists">
          <li>
            <BrandItem />
          </li>
          <li>
            <BrandItem />
          </li>
          <li>
            <BrandItem />
          </li>
          <li>
            <BrandItem />
          </li>
          <li>
            <BrandItem />
          </li>
        </ul>
        <button className="brandBtnNext">
          <img src={rightArrow} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Brand;
