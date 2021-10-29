import { Link } from "react-router-dom";

const Card = ({ products }) => {
  return (
    <section className="card">
      {products.map((product) => {
        return (
          <div className="card__container" key={product.id}>
            <img
              className="card__img"
              src={product.image_url}
              alt="Image of a lamp"
            />
            <Link to="/">
              <h3 className="card__headline">{product.name}</h3>
            </Link>

            <p className="card__description">
              {product.description.substring(0, 100)}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
