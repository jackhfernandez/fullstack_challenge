import "./Details.css"

type Product = {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  stock: number;
};
const Details = ({ title, price, category, description, image }: Product) => {
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
            <h4 id="price">${price}</h4>

            <input type="number" placeholder="0" id="quantity" />
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
