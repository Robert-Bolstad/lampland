import { apiUrl } from "../utils/api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { saveToStorage, retrieveFromStorage } from "../utils/localStorage";
import Modal from "../components/Modal";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [modalState, setModalState] = useState(false);
  const { id } = useParams();

  const getProduct = async () => {
    const response = await fetch(apiUrl + `products/${id}`);
    const product = await response.json();

    setProduct(product);
  };

  const incrementDecrement = (value) => {
    let quantityNr = quantity;

    if (value === 1) {
      quantityNr = quantity + 1;
    } else {
      quantityNr = quantity - 1;
    }

    switch (quantityNr) {
      case 0:
        setQuantity(1);
        break;
      case 100:
        setQuantity(99);
        break;
      default:
        setQuantity(quantityNr);
        break;
    }
  };

  const addToCart = () => {
    setModalState(true);

    let products = retrieveFromStorage("cart");

    const data = {
      id: Math.random(),
      name: product.name,
      price: product.price,
      quantity: quantity,
      img: product.image_url,
    };

    if (products.length === 0) {
      products.push(data);
      saveToStorage("cart", products);
    } else {
      let updatedList = products;
      updatedList.push(data);
      saveToStorage("cart", updatedList);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section className="detail">
      <Modal
        setModalState={setModalState}
        modalState={modalState}
        img={product.image_url}
        name={product.name}
        quantity={quantity}
        price={product.price}
      />
      <div className="detail__productDisplay">
        <div className="detail__imgBox">
          <img className="detail__img" src={product.image_url} alt="lamp" />
        </div>
      </div>
      <div className="detail__container">
        <h1 className="detail__name">{product.name}</h1>
        <p className="detail__description">{product.description}</p>
        <div className="detail__wrapper">
          <span className="detail__price">{product.price + " $"}</span>
          <div className="detail__quantity">
            <input className="detail__input" type="number" />
            <button
              onClick={() => incrementDecrement(-1)}
              className="detail__decrement"
            >
              <AiFillMinusCircle className="detail__icon" />
            </button>
            <div className="detail__number">{quantity}</div>
            <button
              onClick={() => incrementDecrement(1)}
              className="detail__increment"
            >
              <AiFillPlusCircle className="detail__icon" />
            </button>
          </div>
        </div>
        <div className="detail__cart">
          <button onClick={() => addToCart()} className="detail__cart--btn">
            Add to Cart
            <FaShoppingCart className="detail__cart--icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
