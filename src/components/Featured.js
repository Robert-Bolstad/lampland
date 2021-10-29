import { apiUrl } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsLampFill } from "react-icons/bs";
import Card from "./Card";

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
      <Card products={featured} />
      <Link className="featured__link" to="/products">
        <BsLampFill className="featured__icon" /> View All Lamps
      </Link>
    </section>
  );
};

export default Featured;
