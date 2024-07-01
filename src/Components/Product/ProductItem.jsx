import React from "react";
import Button from "../ui/Button";
import formatPrice from "../../helpers/formatPrice";

const ProductItem = ({ product, productList, setCurrentProduct, setModal }) => {
  function handleProductModal() {
    const productModal = productList.find(
      (productItem) => productItem.productName === product.productName
    );

    setCurrentProduct(productModal);
    setModal(true);
  }

  const newProductName = product.productName.slice(0, -1);
  return (
    <>
      <div className="productItemWrapper">
        <div>
          <img src={product.photo} alt={product.descriptionShort} />
        </div>
        <h2>{newProductName}</h2>
        <span className="productOldPrice">
          {formatPrice(product.price * 0.9)}
        </span>
        <span className="productOfferPrice">{formatPrice(product.price)}</span>
        <p>ou 2x de R$ 49,95 sem juros</p>
        <p className="productFreeShipping">Frete grátis</p>
        <Button type="product" onClick={handleProductModal}>
          Comprar
        </Button>
      </div>
    </>
  );
};

export default ProductItem;
