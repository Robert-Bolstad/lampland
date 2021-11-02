import Card from "../components/Card";
import { withRouter } from "react-router-dom";

import { useState, useEffect } from "react";
import Filter from "../components/Filter";
function Products({ data }) {
  const [rawData, setRawdata] = useState(data);
  const [products, setProducts] = useState([]);

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

export default withRouter(Products);
