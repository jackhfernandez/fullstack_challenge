import { Link } from "react-router-dom";
import "./Card.css";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const Card = ({ id, title, price, category, description, image }: Product) => {
  return (
    <div className="card-product">
      <div className="card-img">
        <img src={image} alt="${title}" className="img-responsive" />
      </div>
      <div className="card-text">
        <div className="category">
          <span>{category}</span>
        </div>
        <div className="title-product">
          <h3>{title}</h3>
        </div>
        <div className="description-prod">
          <h3>{description}</h3>
        </div>
        <div className="card-footer">
          <div className="footer-left">
            <span className="price">${price}</span>
          </div>
          <div className="footer-right">
            <div className="buy-now">
              <button>
                <Link to={`/productDetails/${id}`}>Buy Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
