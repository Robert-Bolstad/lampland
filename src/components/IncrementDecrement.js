import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

const IncrementDecrement = ({ quantity, setQuantity }) => {
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
  return (
    <div className="incrementDecrement">
      <input className="incrementDecrement__input" type="number" />
      <button
        onClick={() => incrementDecrement(-1)}
        className="incrementDecrement__decrement"
      >
        <AiFillMinusCircle className="incrementDecrement__icon" />
      </button>
      <div className="incrementDecrement__number">{quantity}</div>
      <button
        onClick={() => incrementDecrement(1)}
        className="incrementDecrement__increment"
      >
        <AiFillPlusCircle className="incrementDecrement__icon" />
      </button>
    </div>
  );
};

export default IncrementDecrement;
