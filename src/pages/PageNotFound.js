import logo from "../img/logo.svg";

const PageNotFound = () => {
  return (
    <div className="notFound">
      <img className="notFound__logo" src={logo} alt="" />

      <h1 className="notFound__heading">Page dose not exsist!</h1>
    </div>
  );
};

export default PageNotFound;
