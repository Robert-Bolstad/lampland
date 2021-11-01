import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const Card = ({ products }) => {
  const auth = useContext(AuthContext);
  const checkAuth = () => {
    if (auth[0] === null) {
      return "noneUser";
    } else {
      return auth[0].user.role.name;
    }
  };

  return (
    <section className="card">
      {products.map((product) => {
        return (
          <div className="card__container" key={product.id}>
            <Link to={`/details/${product.id}`}>
              <img className="card__img" src={product.image_url} alt="lamp" />
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
            {checkAuth() === "Authenticated" ? (
              <div className="card__admin">
                <Link to={`/edit/${product.id}`} className="card__edit">
                  Edit
                </Link>
                <button className="card__delete">Delete</button>
              </div>
            ) : null}
          </div>
        );
      })}
    </section>
  );
};

export default Card;
