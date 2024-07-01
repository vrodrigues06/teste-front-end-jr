import Brand from "./Components/Brands/Brand";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Partners from "./Components/Partners/Partners";
import ProductPanel from "./Components/Product/ProductPanel";
import ProductsRelated from "./Components/Product/ProductsSection";
import Banner from "./Components/ui/Banner";

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <Category />
      <ProductsRelated />
      <Partners />
      <ProductPanel />
      <Brand />
      <Footer />
    </main>
  );
}

export default App;
