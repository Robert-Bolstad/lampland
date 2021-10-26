import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__headingWrapper">
            <div className="footer__bulletPoint"></div>
            <h3 className="footer__heading">Navigation</h3>
          </div>
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link" to="/">
                Home
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/products">
                Products
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <div className="footer__headingWrapper">
            <div className="footer__bulletPoint"></div>
            <h3 className="footer__heading">Contact Info</h3>
          </div>
          <ul className="footer__list">
            <li className="footer__item footer__info">
              <span className="footer__item--highlight">Phone: </span>00 00 00
              00
            </li>
            <li className="footer__item footer__info">
              <span className="footer__item--highlight">Email: </span>
              lampland@email.com
            </li>
            <li className="footer__item footer__info">
              <span className="footer__item--highlight">Adress: </span>lampland
              88, 5064 Bergen
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <div className="footer__headingWrapper">
            <div className="footer__bulletPoint"></div>
            <h3 className="footer__heading">Follow Us</h3>
          </div>
          <ul className="footer__contact">
            <li className="footer__item">
              <Link to={{ pathname: "https://facebook.com" }} target="_blank">
                <FaIcons.FaFacebookF className="footer__icon" />
              </Link>
            </li>
            <li className="footer__item">
              <Link to={{ pathname: "https://instagram.com" }} target="_blank">
                <FaIcons.FaInstagram className="footer__icon" />
              </Link>
            </li>
            <li className="footer__item">
              <Link to={{ pathname: "https://twitter.com" }} target="_blank">
                <FaIcons.FaTwitter className="footer__icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <div className="footer__headingWrapper">
            <div className="footer__bulletPoint"></div>
            <h3 className="footer__heading">Get Our Newsletter</h3>
          </div>
          <div className="footer__newsletter">
            <input
              className="footer__input"
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
            />
            <button className="footer__btn" type="submit">
              <RiMailSendLine className="footer__btn--icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>©{year + " "}Lampland.com</span>
      </div>
    </footer>
  );
};

export default Footer;
