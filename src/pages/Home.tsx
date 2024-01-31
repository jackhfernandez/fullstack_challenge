import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PromoBar from "../components/PromoBar";
import Banner from "../components/Banner";
import Collection from "../components/Collection";
import Sellers from "../components/Sellers";
import News from "../components/News/Index";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const URL = "http://localhost:8081/product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(URL);
      const data = await result.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <PromoBar />
      <NavBar />
      <Banner />
      <Collection />
      <Sellers products={products} />
      <News />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
