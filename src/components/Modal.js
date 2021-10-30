import { AiFillCloseCircle } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = ({ setModalState, modalState, img, name, quantity, price }) => {
  return (
    <div className={modalState ? "modal modal--active" : "modal"}>
      <div className="modal__container">
        <div className="modal__top">
          <div></div>
          <FaCartArrowDown className="modal__icon" />
          <button onClick={() => setModalState(false)} className="modal__close">
            <AiFillCloseCircle className="modal__close--icon" />
          </button>
        </div>
        <h3 className="modal__name">{name}</h3>
        <img className="modal__img" src={img} alt="product" />
        <p className="modal__quantity">
          {quantity + " x "}
          <span className="modal__quantity--name">{name}</span>
          {" has been added to your cart"}
        </p>
        <p className="modal__price">
          Total Price:{" "}
          <span className="modal__price--price">
            {parseFloat(price * quantity).toFixed(2) + " "}
          </span>
          $
        </p>
        <div className="modal__links">
          <Link to="/products" className="modal__link modal__link--shop">
            Shop More
          </Link>
          <Link to="/cart" className="modal__link modal__link--cart">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
