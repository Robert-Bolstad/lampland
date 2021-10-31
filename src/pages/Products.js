import Card from "../components/Card";
import { apiUrl } from "../utils/api";
import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
function Products() {
  const [searchBtn, setSearchBtn] = useState(false);
  const [rawData, SetRawdata] = useState([]);
  const [products, SetProducts] = useState([]);
  const [savedProductsData, SetSavedProductsData] = useState([]);
  const [categoryLength, SetCategoryLength] = useState({
    ceilingLamps: 0,
    wallLamps: 0,
    tableLamps: 0,
    floorLamps: 0,
  });
  const [filter, setFilter] = useState({
    name: "",
    ceilingLamps: false,
    wallLamps: false,
    tableLamps: false,
    floorLamps: false,
    price: "",
  });

  const checkLenght = (products) => {
    const ceilingLamps = products.filter((product) => {
      if (product.category === "ceilingLamps") {
        return true;
      }
    });
    const wallLamps = products.filter((product) => {
      if (product.category === "wallLamps") {
        return true;
      }
    });
    const tableLamps = products.filter((product) => {
      if (product.category === "tableLamps") {
        return true;
      }
    });
    const floorLamps = products.filter((product) => {
      if (product.category === "floorLamps") {
        return true;
      }
    });
    SetCategoryLength({
      ...categoryLength,
      ceilingLamps: ceilingLamps.length,
      wallLamps: wallLamps.length,
      tableLamps: tableLamps.length,
      floorLamps: floorLamps.length,
    });
  };

  const checkboxOne = useRef();
  const checkboxTwo = useRef();
  const checkboxThree = useRef();
  const checkboxFour = useRef();

  const handleClick = () => {
    setSearchBtn(!searchBtn);
  };

  const clickCheckBox = (id) => {
    switch (id) {
      case "1":
        checkboxOne.current.click();
        break;
      case "2":
        checkboxTwo.current.click();
        break;
      case "3":
        checkboxThree.current.click();
        break;
      case "4":
        checkboxFour.current.click();
        break;
      default:
        break;
    }
  };

  const search = (products) => {
    const text = products.filter((card) => {
      if (
        card.name.toLowerCase().includes(filter.name) ||
        card.description.toLowerCase().includes(filter.name)
      ) {
        return true;
      }
    });

    const price = text.filter((card) => {
      if (card.price >= filter.price) {
        return true;
      }
    });

    const checked = price.filter((card) => {
      if (
        (card.category === "ceilingLamps" && filter.ceilingLamps === true) ||
        (card.category === "wallLamps" && filter.wallLamps === true) ||
        (card.category === "tableLamps" && filter.tableLamps === true) ||
        (card.category === "floorLamps" && filter.floorLamps === true)
      ) {
        return true;
      }
    });

    if (checked.length === 0) {
      SetProducts(price);
      SetSavedProductsData([]);
    } else {
      SetProducts(checked);
      SetSavedProductsData(price);
    }
  };

  const getUsers = async () => {
    const response = await fetch(apiUrl + "products");
    const products = await response.json();
    SetRawdata(products);
    SetProducts(products);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    search(rawData);
  }, [filter]);

  useEffect(() => {
    if (savedProductsData.length > 0) {
      checkLenght(savedProductsData);
    } else {
      checkLenght(products);
    }
  }, [products]);

  return (
    <>
      <section className="filter">
        <div className="filter__top">
          <h1 className="filter__heading">Products</h1>
          <button onClick={() => handleClick()} className="filter__btn">
            <FaSearch className="filter__searchIcon" />
          </button>
        </div>
        <div
          className={
            searchBtn
              ? "filter__options filter__options--active"
              : "filter__options"
          }
        >
          <div className="filter__search">
            <input
              className="filter__searchInput"
              type="search"
              name=""
              id=""
              placeholder={`(${products.length}) Search Products`}
              value={filter.name}
              onChange={(e) => setFilter({ ...filter, name: e.target.value })}
            />
          </div>
          <div className="filter__category">
            <div className="filter__category">
              <input
                className="filter__checkbox"
                type="checkbox"
                name=""
                ref={checkboxOne}
                value={filter.ceilingLamps}
                onChange={(e) =>
                  setFilter({ ...filter, ceilingLamps: e.target.checked })
                }
              />
              <button
                className="filter__checkBtn"
                id={1}
                onClick={(e) => clickCheckBox(e.currentTarget.id)}
              >
                <BsCheckLg
                  className={
                    filter.ceilingLamps
                      ? "filter__checkIcon filter__checkIcon--active"
                      : "filter__checkIcon"
                  }
                />
              </button>
              <span className="filter__name">
                Ceilling lamps ({" "}
                <span className="filter__name--highlight">
                  {categoryLength.ceilingLamps}
                </span>{" "}
                )
              </span>
            </div>
            <div className="filter__category">
              <input
                className="filter__checkbox"
                type="checkbox"
                name=""
                ref={checkboxTwo}
                value={filter.wallLamps}
                onChange={(e) =>
                  setFilter({ ...filter, wallLamps: e.target.checked })
                }
              />
              <button
                className="filter__checkBtn"
                id={2}
                onClick={(e) => clickCheckBox(e.currentTarget.id)}
              >
                <BsCheckLg
                  className={
                    filter.wallLamps
                      ? "filter__checkIcon filter__checkIcon--active"
                      : "filter__checkIcon"
                  }
                />
              </button>
              <span className="filter__name">
                Wall lamps ({" "}
                <span className="filter__name--highlight">
                  {categoryLength.wallLamps}
                </span>{" "}
                )
              </span>
            </div>
            <div className="filter__category">
              <input
                className="filter__checkbox"
                type="checkbox"
                name=""
                ref={checkboxThree}
                value={filter.tableLamps}
                onChange={(e) =>
                  setFilter({ ...filter, tableLamps: e.target.checked })
                }
              />
              <button
                className="filter__checkBtn"
                id={3}
                onClick={(e) => clickCheckBox(e.currentTarget.id)}
              >
                <BsCheckLg
                  className={
                    filter.tableLamps
                      ? "filter__checkIcon filter__checkIcon--active"
                      : "filter__checkIcon"
                  }
                />
              </button>
              <span className="filter__name">
                Table lamps ({" "}
                <span className="filter__name--highlight">
                  {categoryLength.tableLamps}
                </span>{" "}
                )
              </span>
            </div>
            <div className="filter__category">
              <input
                className="filter__checkbox"
                type="checkbox"
                name=""
                ref={checkboxFour}
                value={filter.floorLamps}
                onChange={(e) =>
                  setFilter({ ...filter, floorLamps: e.target.checked })
                }
              />
              <button
                className="filter__checkBtn"
                id={4}
                onClick={(e) => clickCheckBox(e.currentTarget.id)}
              >
                <BsCheckLg
                  className={
                    filter.floorLamps
                      ? "filter__checkIcon filter__checkIcon--active"
                      : "filter__checkIcon"
                  }
                />
              </button>
              <span className="filter__name">
                Floor lamps ({" "}
                <span className="filter__name--highlight">
                  {categoryLength.floorLamps}
                </span>{" "}
                )
              </span>
            </div>
            <input
              className="filter__price"
              type="number"
              placeholder="Min Price"
              value={filter.price}
              onChange={(e) => setFilter({ ...filter, price: e.target.value })}
            />
          </div>
        </div>
      </section>
      <Card products={products} />
    </>
  );
}

export default Products;
