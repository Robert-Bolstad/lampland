import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import IncrementDecrement from "./IncrementDecrement";
import { retrieveFromStorage, saveToStorage } from "../utils/localStorage";

const CartItem = ({ id, cartId, img, name, price, quantity, setItems }) => {
  const [quantityState, setQuantityState] = useState(quantity);
  const products = retrieveFromStorage("cart");

  const removeProduct = () => {
    const filtered = products.filter((product) => {
      if (product.cartId != cartId) {
        return true;
      }
    });
    saveToStorage("cart", filtered);
    setItems(filtered);
  };

  const calcTotalPrice = () => {
    const total = price * quantity;

    return total.toFixed(2);
  };

  useEffect(() => {
    products.forEach((product) => {
      if (product.cartId === cartId) {
        product.quantity = quantityState;
      }
    });

    saveToStorage("cart", products);
    setItems(products);
  }, [quantityState]);

  return (
    <div className="cartItem">
      <img className="cartItem__img" src={img} alt={name} />

      <div className="cartItem__wrapper">
        <Link className="cartItem__name" to={"details/" + id}>
          {name}
        </Link>
        <p className="cartItem__price">
          <span>{calcTotalPrice()} $</span>
        </p>
        <button
          className="cartItem__remove"
          onClick={() => {
            removeProduct();
          }}
        >
          Remove
        </button>
      </div>
      <div className="cartItem__increment">
        <IncrementDecrement
          quantity={quantityState}
          setQuantity={setQuantityState}
        />
      </div>
    </div>
  );
};

export default CartItem;
