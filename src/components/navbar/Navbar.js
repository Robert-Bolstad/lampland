import logo from "../../img/logo.svg";
import { useState, useEffect, useContext } from "react";
import NavMobile from "./mobile/NavMobile";
import NavDesktop from "./desktop/NavDesktop";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);
  const auth = useContext(AuthContext);
  const role = auth[0].user.role.name;

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
        <NavMobile logo={logo} role={role} />
      ) : (
        <NavDesktop logo={logo} role={role} />
      )}
    </header>
  );
};

export default Navbar;
