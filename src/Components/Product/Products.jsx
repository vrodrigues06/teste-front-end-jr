import React, { useRef } from "react";
import ProductItem from "./ProductItem";
import productArrow from "../../assets/productArrow.svg";
import ProductModal from "./ProductModal";

const URL_API =
  "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

const Products = () => {
  const [productList, setProductList] = React.useState(null);
  const [position, setPosition] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const [slide, setSlide] = React.useState(0);
  const listaRef = useRef();
  const [modal, setModal] = React.useState(false);
  const [currentProduct, setCurrentProduct] = React.useState(null);

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(URL_API);

        if (!response.ok) throw new Error("Não foi possível fazer o fetch!");

        const data = await response.json();

        setProductList(data.products);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchProducts();
  }, []);

  React.useEffect(() => {
    if (!listaRef.current) return;
    if (!productList) return;
    const { width } = listaRef.current.getBoundingClientRect();
    setPosition(-(width * active));
    setSlide(productList.length / 4);
  }, [active, productList]);

  if (!productList) return null;

  function handleNextSlide() {
    if (productList.length <= 4) return null;

    if (active < slide - 1) setActive(active + 1);
  }

  function handlePrevSlide() {
    if (productList.length <= 4) return null;

    if (active > 0) setActive(active - 1);
  }

  return (
    <>
      <section className="container productContainer">
        <div className="carrosel">
          <ul
            className="productList"
            ref={listaRef}
            style={{ transform: `translateX(${position}px)` }}
          >
            {productList.map((product, i) => (
              <li key={i}>
                <ProductItem
                  product={product}
                  productList={productList}
                  setCurrentProduct={setCurrentProduct}
                  setModal={setModal}
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleNextSlide}
          className="btnSlide productArrowRight"
        >
          <img src={productArrow} alt="" />
        </button>
        <button onClick={handlePrevSlide} className="btnSlide productArrowLeft">
          <img src={productArrow} alt="" />
        </button>
      </section>
      <ProductModal
        modal={modal}
        productModal={currentProduct}
        setModal={setModal}
      />
    </>
  );
};

export default Products;
