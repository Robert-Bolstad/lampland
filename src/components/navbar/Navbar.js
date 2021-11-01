import logo from "../../img/logo.svg";
import { useState, useEffect, useContext } from "react";
import NavMobile from "./mobile/NavMobile";
import NavDesktop from "./desktop/NavDesktop";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);
  const auth = useContext(AuthContext);

  const checkAuth = () => {
    if (auth[0] === null) {
      return "noneUser";
    } else {
      return auth[0].user.role.name;
    }
  };

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  return (
    <header>
      {size < 1000 ? (
        <NavMobile logo={logo} role={checkAuth()} />
      ) : (
        <NavDesktop logo={logo} role={checkAuth()} />
      )}
    </header>
  );
};

export default Navbar;
