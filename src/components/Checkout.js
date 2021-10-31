const Checkout = ({ items }) => {
  const calculateSubtotal = () => {
    let sum = 0;

    items.forEach((item) => {
      const each = item.price * item.quantity;
      sum += each;
    });
    return sum.toFixed(2);
  };

  const processOrder = () => {
    window.alert("You checked out your order");
  };

  return (
    <div className="checkout">
      <div className="checkout__info">
        <h3 className="checkout__subtotal">Subtotal</h3>
        <span>{calculateSubtotal()} $</span>
      </div>
      <button onClick={() => processOrder()} className="checkout__btn">
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
