import Card from "../Card";
import "./Sellers.css";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  stock: number;
};

type sellerProps = {
  products: Product[];
};

const Sellers = ({ products }: sellerProps) => {
  return (
    <section id="sellers">
      <div className="seller container">
        <h2>Top Sales</h2>
        <div className="best-seller">
          {products.map((product, index) => (
            <Card {...product} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sellers;
