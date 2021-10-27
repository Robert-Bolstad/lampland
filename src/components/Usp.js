import { GiReceiveMoney, GiBackwardTime } from "react-icons/gi";
import { BiPackage } from "react-icons/bi";
import { MdMoneyOff } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";

const Usp = () => {
  return (
    <section className="usp">
      <div className="usp__item">
        <MdMoneyOff className="usp__icon" />
        <div>
          <span className="usp__headline">Prices Includes VAT and Customs</span>
          <span className="usp__subheadline">- No hidden fees</span>
        </div>
      </div>
      <div className="usp__item">
        <BiPackage className="usp__icon" />
        <div>
          <span className="usp__headline">We Offer Free Deliveries</span>
          <span className="usp__subheadline">- On orders over 2000,-</span>
        </div>
      </div>
      <div className="usp__item">
        <AiOutlineSafety className="usp__icon" />
        <div>
          <span className="usp__headline">Secure e-Commerce certified</span>
          <span className="usp__subheadline">- For your safety</span>
        </div>
      </div>
      <div className="usp__item">
        <GiBackwardTime className="usp__icon" />
        <div>
          <span className="usp__headline">30 days open purchase</span>
          <span className="usp__subheadline">- For your satisfaction</span>
        </div>
      </div>
    </section>
  );
};

export default Usp;
