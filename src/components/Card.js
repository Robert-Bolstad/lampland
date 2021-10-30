import { Link } from "react-router-dom";

const Card = ({ products }) => {
  return (
    <section className="card">
      {products.map((product) => {
        return (
          <div className="card__container" key={product.id}>
            <Link to={`/details/${product.id}`}>
              <img
                className="card__img"
                src={product.image_url}
                alt="Image of a lamp"
              />
            </Link>
            <div className="card__headingWrapper">
              <Link to={`/details/${product.id}`}>
                <h3 className="card__headline">{product.name}</h3>
              </Link>

              <span className="card__price">{product.price + "$"}</span>
            </div>

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
