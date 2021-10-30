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
      <img src={img} alt={name} />
      <Link to={"details/" + id}>{name}</Link>
      <p>
        Total <span>{calcTotalPrice()} $</span>
      </p>
      <IncrementDecrement
        quantity={quantityState}
        setQuantity={setQuantityState}
      />
      <button
        onClick={() => {
          removeProduct();
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
