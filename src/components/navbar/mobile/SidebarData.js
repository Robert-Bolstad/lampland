import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    id: 1,
  },
  {
    title: "Products",
    path: "/products",
    icon: <BsIcons.BsLampFill />,
    id: 2,
  },
  {
    title: "Cart",
    path: "/cart",
    icon: <FaIcons.FaShoppingCart />,
    id: 3,
  },
  {
    title: "Login",
    path: "/login",
    icon: <IoIcons.IoLogInSharp />,
    id: 4,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: <MdIcons.MdFavorite />,
    id: 5,
  },
  {
    title: "Add",
    path: "/add",
    icon: <AiIcons.AiFillHome />,
    id: 6,
  },
];
