import Card from "../components/Card";
import { apiUrl } from "../utils/api";
import { useState, useEffect, useRef } from "react";

import Filter from "../components/Filter";
function Products() {
  const [rawData, setRawdata] = useState([]);
  const [products, setProducts] = useState([]);

  const getUsers = async () => {
    const response = await fetch(apiUrl + "products");
    const products = await response.json();
    setRawdata(products);
    setProducts(products);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {}, [products]);

  return (
    <>
      {rawData.length > 0 ? (
        <Filter rawData={rawData} setFiltered={setProducts} />
      ) : null}

      <Card products={products.length > 0 ? products : products} />
    </>
  );
}

export default Products;
