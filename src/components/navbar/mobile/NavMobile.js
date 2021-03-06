import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import {
  sidebarData,
  sidebarDataUser,
  sidebarDataAdmin,
} from "../mobile/SidebarData";

const NavMobile = ({ logo, role }) => {
  const [sidebar, setSidebar] = useState(false);
  const [userType, SetUserType] = useState(sidebarData);
  const handleSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    switch (role) {
      case "Authenticated":
        SetUserType(sidebarDataAdmin);
        break;
      case "Public":
        SetUserType(sidebarDataUser);
        break;

      default:
        SetUserType(sidebarData);
        break;
    }
  }, []);
  return (
    <>
      <div className="navMobile">
        <Link to="#" className="navMobile__bars">
          <FaIcons.FaBars onClick={handleSidebar} />
        </Link>
        <Link to="/">
          <div className="navMobile__logo">
            <img className="navMobile__logo--img" src={logo} alt="logo" />
            Lampland<span className="navMobile__logo--highlight">.com</span>
          </div>
        </Link>
        <Link to="/cart" className="navMobile__cart">
          <FaIcons.FaShoppingCart />
        </Link>
      </div>
      <nav
        className={
          sidebar
            ? "navMobile__menu navMobile__menu--active"
            : "navMobile__menu"
        }
      >
        <ul className="navMobile__list">
          <li className="navMobile__toggle">
            <Link to="#" className="navMobile__bars">
              <AiIcons.AiOutlineClose onClick={handleSidebar} />
            </Link>
          </li>
          {userType.map((item) => {
            return (
              <li key={item.id} className="navMobile__item">
                <Link to={item.path} onClick={handleSidebar}>
                  {item.icon}
                  <span className="navMobile__text">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavMobile;
