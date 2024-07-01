import React from "react";
import Button from "../ui/Button";
import formatPrice from "../../helpers/formatPrice";
import closeButton from "../../assets/close-button.svg";
import ProductQtd from "./ProductQtd";

const ProductModal = ({ modal, productModal, setModal }) => {
  const [quantity, setQuantity] = React.useState(1);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModal(false);
  }

  function handleCloseButton() {
    setModal(false);
  }

  function handlePlusQuantity() {
    setQuantity((quantity) => quantity + 1);
  }
  function handleMinusQuantity() {
    if (quantity === 1) return;
    setQuantity((quantity) => quantity - 1);
  }

  if (!modal) return null;

  return (
    <div className="productModalContainer" onClick={handleOutsideClick}>
      <div className="productModal">
        <button className="productModalClose" onClick={handleCloseButton}>
          <img src={closeButton} alt="" />
        </button>
        <div className="productModalPhoto">
          <img src={productModal.photo} alt={productModal.descriptionShort} />
        </div>
        <div className="productModalInfo">
          <h1>{productModal.productName}</h1>
          <span>{formatPrice(productModal.price * quantity)}</span>
          <p>{productModal.descriptionShort}</p>
          <a href="">Veja mais detalhes do produto &gt; </a>
          <ProductQtd
            handleMinusQuantity={handleMinusQuantity}
            handlePlusQuantity={handlePlusQuantity}
            quantity={quantity}
          />
          <Button type="product">Comprar</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
