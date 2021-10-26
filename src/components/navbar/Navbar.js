import logo from "../../img/logo.svg";
import { useState, useEffect } from "react";
import NavMobile from "./mobile/NavMobile";
import NavDesktop from "./desktop/NavDesktop";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);

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
      {size < 1000 ? <NavMobile logo={logo} /> : <NavDesktop logo={logo} />}
    </header>
  );
};

export default Navbar;
