import CartItem from "../components/CartItem";
import { retrieveFromStorage } from "../utils/localStorage";
import { useState, useEffect } from "react";
import Checkout from "../components/Checkout";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const [items, setItems] = useState(retrieveFromStorage("cart"));

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
          <Checkout items={items} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
