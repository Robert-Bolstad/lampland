import { Link } from "react-router-dom";
import { useContext } from "react";
import * as FaIcons from "react-icons/fa";
import AuthContext from "../../../context/AuthContext";

const NavDesktop = ({ logo, role }) => {
  return (
    <div className="navDesktop">
      <Link to="/">
        <div className="navDesktop__logo">
          <img className="navDesktop__logo--img" src={logo} alt="logo" />
          Lampland<span className="navDesktop__logo--highlight">.com</span>
        </div>
      </Link>
      <nav>
        <ul className="navDesktop__list">
          <li className="navDesktop__item">
            <Link className="navDesktop__link" to="/">
              Home
            </Link>
          </li>
          <li className="navDesktop__item">
            <Link className="navDesktop__link" to="/products">
              Products
            </Link>
          </li>
          {role === "Authenticated" ? (
            <li className="navDesktop__item">
              <Link className="navDesktop__link" to="/add">
                AddProducts
              </Link>
            </li>
          ) : null}
          {role === "Authenticated" || "Public" ? (
            <li className="navDesktop__item">
              <button className="navDesktop__link">Logout</button>
            </li>
          ) : (
            <li className="navDesktop__item">
              <Link className="navDesktop__link" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Link to="/cart" className="navDesktop__cart">
        <FaIcons.FaShoppingCart />
        <span className="navDesktop__cart--text">View Cart</span>
      </Link>
    </div>
  );
};

export default NavDesktop;
