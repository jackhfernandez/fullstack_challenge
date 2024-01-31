import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import PromoBar from "../components/PromoBar";
import Details from "../components/Details";
import Footer from "../components/Footer";
import More from "../components/More";

const URL = "http://127.0.0.1:8081/product";

type ParamsTypes = {
  id: string;
};

type Product = {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  stock: number;
};

const ProductDetails = () => {
  const { id } = useParams<ParamsTypes>();

  const [product, setProduct] = useState<Product>({
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
    stock: 0,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(URL + "/" + id);
      const data = await result.json();
      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <PromoBar />
      <NavBar />
      <Details
        title={product.title}
        price={product.price}
        category={product.category}
        description={product.description}
        image={product.image}
        stock={product.stock}
      />
      <More />
      <Footer />
    </>
  );
};

export default ProductDetails;
