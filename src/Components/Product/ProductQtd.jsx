import React from "react";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

const ProductQtd = ({ quantity, handleMinusQuantity, handlePlusQuantity }) => {
  return (
    <div className="productModalQuantity">
      <button onClick={handleMinusQuantity} aria-label="Diminuir quantidade">
        <img src={minus} alt="Símbolo de menos" />
      </button>
      <p>{quantity}</p>
      <button onClick={handlePlusQuantity} aria-label="Aumentar quantidade">
        <img src={plus} alt="Símbolo de mais" />
      </button>
    </div>
  );
};

export default ProductQtd;
