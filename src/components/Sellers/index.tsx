import Card from "../Card";
import "./Sellers.css";

// crear el typo en typescript con la información que se recibirá y renderizara en este componente
// recuerda que este sera un arreglo de productos donde los productos tienen la estructura que se
// presento anteriormente, este typo creado utilízalo para definir el type de los parámetros de entrada
// de este componente.

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
