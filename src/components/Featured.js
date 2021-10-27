import { apiUrl } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsLampFill } from "react-icons/bs";

const Featured = () => {
  const [featured, SetFeatured] = useState([]);

  const getUsers = async () => {
    const response = await fetch(apiUrl + "products");
    const products = await response.json();

    const filtered = products.filter((product) => {
      if (product.featured) {
        return true;
      }
    });
    SetFeatured(filtered);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="featured">
      <h1 className="featured__heading">Featured Products</h1>
      <div className="featured__container">
        {featured.map((product) => {
          return (
            <div className="featured__card" key={product.id}>
              <img
                className="featured__img"
                src={product.image_url}
                alt="Image of a lamp"
              />
              <Link to="/">
                <h3 className="featured__productName">{product.name}</h3>
              </Link>

              <p className="featured__description">
                {product.description.substring(0, 100)}
              </p>
            </div>
          );
        })}
      </div>
      <Link className="featured__link" to="/products">
        <BsLampFill className="featured__icon" /> View All Lamps
      </Link>
    </section>
  );
};

export default Featured;
