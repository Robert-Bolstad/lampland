import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import dataFilter from "../utils/dataFilter";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router";
import { schema } from "../utils/schemaValidators/schema";
import { useForm } from "react-hook-form";
import { apiUrl } from "../utils/api";
import { withRouter } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import placeHolder from "../img/placeHolder.svg";

const EditProducts = ({ data }) => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  const [auth] = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(dataFilter(data, id));
  const [productData, setProductData] = useState({
    image_url: product[0].image_url,
    name: product[0].name,
    price: product[0].price,
    category: product[0].category,
    description: product[0].description,
    featured: product[0].featured,
  });

  const history = useHistory();

  const checkAuth = () => {
    if (auth === null) {
      return "noneUser";
    } else {
      return auth.user.role.name;
    }
  };

  const role = checkAuth();

  if (role !== "Authenticated") {
    history.push("/home");
  }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    setSubmitting(true);
    const key = auth.jwt;

    try {
      await axios.put(apiUrl + `products/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
      });
    } catch (error) {
      window.alert(error);
    } finally {
      setSubmitting(false);
      window.alert("product was Successfully updated");
    }
  };

  return (
    <div className="editProducts">
      <h1 className="editProducts__heading">Edit Product</h1>
      <form className="editForm" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="editForm__fieldset" disabled={submitting}>
          <section className="editForm__section">
            <div className="editForm__group">
              <div className="editForm__imgContainer">
                <img
                  className="editForm__img"
                  src={productData.image_url}
                  onError={(e) => (e.target.src = placeHolder)}
                  alt="lamp"
                />
              </div>
              <span className="editForm__category">Image Url: </span>
              <input
                className="editForm__input"
                ref={register}
                name="image_url"
                type="url"
                placeholder="https://url-image.com"
                value={productData.image_url}
                onChange={(e) =>
                  setProductData({ ...productData, image_url: e.target.value })
                }
              />
            </div>
          </section>
          <section className="editForm__section">
            <div className="editForm__group">
              <span className="editForm__category">Product Name: </span>
              <input
                className="editForm__input"
                ref={register}
                name="name"
                type="text"
                value={productData.name}
                onChange={(e) =>
                  setProductData({ ...productData, name: e.target.value })
                }
              />
              {errors.name && (
                <span className="form__error-message">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="editForm__group">
              <span className="editForm__category">Product Price: </span>
              <input
                className="editForm__input"
                ref={register}
                name="price"
                type="number"
                value={productData.price}
                onChange={(e) =>
                  setProductData({ ...productData, price: e.target.value })
                }
              />
              {errors.name && (
                <span className="form__error-message">
                  {errors.price.message}
                </span>
              )}
            </div>
            <div className="editForm__group">
              <span className="editForm__category">Product Description: </span>
              <textarea
                className="editForm__input editForm__input--textarea"
                ref={register}
                name="description"
                type="text"
                value={productData.description}
                onChange={(e) =>
                  setProductData({ ...productData, name: e.target.value })
                }
              />
              {errors.name && (
                <span className="form__error-message">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="editForm__group">
              <span className="editForm__category">Product Catagory: </span>
              <select
                className="editForm__input"
                name="category"
                ref={register}
                type="text"
                value={productData.category}
                onChange={(e) =>
                  setProductData({ ...productData, category: e.target.value })
                }
              >
                <option
                  className="EstablishmentDetails__option"
                  style={{ display: "none" }}
                  value=""
                >
                  Select your type
                </option>
                <option value="ceilingLamps">Ceiling Lamp</option>
                <option value="wallLamps">Wall Lamp</option>
                <option value="tableLamps">Table Lamp</option>
                <option value="floorLamps">Floor Lamp</option>
              </select>
              {errors.name && (
                <span className="form__error-message">
                  {errors.category.message}
                </span>
              )}
            </div>
            <div className="editForm__group editForm__group--checkbox">
              <span className="editForm__category editForm__category--checkbox">
                Is Featured:{" "}
              </span>
              <input
                className="editForm__checkboxInput"
                ref={register}
                name="featured"
                type="checkbox"
                checked={productData.featured}
                value={productData.featured}
                onChange={(e) =>
                  setProductData({ ...productData, featured: e.target.checked })
                }
              />
              <div
                className={
                  productData.featured
                    ? "editForm__checkbox editForm__checkbox--active"
                    : "editForm__checkbox"
                }
              >
                <BsCheckLg
                  onClick={() =>
                    setProductData({
                      ...productData,
                      featured: !productData.featured,
                    })
                  }
                />
              </div>
            </div>
            <div>
              <button className="editForm__btn" type="submit">
                Update
              </button>
            </div>
          </section>
        </fieldset>
      </form>
    </div>
  );
};

export default withRouter(EditProducts);
