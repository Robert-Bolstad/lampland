import { apiUrl } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsLampFill } from "react-icons/bs";
import Card from "./Card";

const Featured = ({ data }) => {
  const filtered = data.filter((item) => {
    if (item.featured === true) {
      return true;
    }
  });

  return (
    <section className="featured">
      <h1 className="featured__heading">Featured Products</h1>
      <Card products={filtered} />
      <Link className="featured__link" to="/products">
        <BsLampFill className="featured__icon" /> View All Lamps
      </Link>
    </section>
  );
};

export default Featured;
