import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="emptyCart">
      <BsCartX className="emptyCart__icon" />
      <h3 className="emptyCart__heading">Your cart is empty</h3>
      <Link className="emptyCart__link" to="./products">
        Go to store
      </Link>
    </div>
  );
};

export default EmptyCart;
