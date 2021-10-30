import CartItem from "../components/CartItem";
import { retrieveFromStorage } from "../utils/localStorage";
import { useState, useEffect } from "react";

const Cart = () => {
  const [items, setItems] = useState(retrieveFromStorage("cart"));

  const calculateSubtotal = () => {
    let sum = 0;

    items.forEach((item) => {
      const each = item.price * item.quantity;
      sum += each;
    });
    return sum.toFixed(2);
  };

  useEffect(() => {}, [items]);

  return (
    <section className="cart">
      <h1 className="cart__heading">My Cart</h1>
      {items.length > 0 ? (
        <div className="cart__container">
          {items.map((item) => {
            return (
              <CartItem
                key={item.cartId}
                id={item.id}
                cartId={item.cartId}
                img={item.img}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                setItems={setItems}
              />
            );
          })}
          <div>
            <h3>Subtotal</h3>
            <span>{calculateSubtotal()}</span>
          </div>
        </div>
      ) : (
        <div>Empty cart</div>
      )}
    </section>
  );
};

export default Cart;
