
// dada la siguiente estructura de JSX agrega los estilos css necesarios para ver los detalles del
// producto, para que se vea como se presenta en la siguiente imagen

// crear el typo en typescript con la información que se recibirá y renderizara en este componente
// recuerda que este serán los parámetros de un producto que tiene la estructura que se
// presento anteriormente, este typo creado utilízalo para definir el type de los parámetros de entrada
// de este componente.

type Product = {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  stock: number;
};
const Details = ({ title, price, category, description, image }: Product) => {
  // por ultimo agrega los valores del producto en el componente `Details`
  return (
    <section>
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <img src={image} alt="" width="100%" id="image" />
          </div>
          <div className="col-2">
            <p>
              Home /
              <span id="category">
                {category}
              </span>
            </p>
            
            <h1 id="title">{title}</h1>
            <h4 id="price">{price}</h4>

            <input type="number" id="quantity" />
            <button className="btn" id="btn">
              Add To Cart
            </button>

            <h3>Product Details</h3>
            <br />
            <p id="description">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
