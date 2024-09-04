// Components
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// component
import "./SomeProducts.css";
import "./SomeProducts.responsive.css";
import PopupItemAded from "../popup/cartItemAddedPopup/PopupItemAded";

// redux
import { fetch_asyncThunk } from "../../Redux/reducers/fetchApi_reducer";
import {
  addInCart,
  calculateItems,
} from "../../Redux/reducers/addInCart_reducer";
import { pushSingle_product } from "../../Redux/reducers/soloProduct_reducer";

// context
import { useContext } from "react";
import Gl_context from "../../context/ContextApi";
import { useNavigate } from "react-router-dom";

const SomeProducts = () => {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetch_asyncThunk());
  }, [dispatch]);

  const { ApiProducts, loading } = useSelector(
    (state) => state.fetchApi_reducerKey
  );

  let filteredProducts = [];
  if (ApiProducts) {
    filteredProducts = ApiProducts.slice(0, 4);
  }

  // context
  const { CartAddedPopup, setCartAddedPopup } = useContext(Gl_context);

  if (loading) {
    return (
      <>
        <div className="productsLoading">
          <p>loading...</p>
        </div>
      </>
    );
  }
  return (
    <>
      {CartAddedPopup && <PopupItemAded />}

      <div className="my-products" id="products">
        <div className="container">
          <div className="All_Products" id="productsList">
            {ApiProducts &&
              loading === false &&
              filteredProducts.map((product) => (
                <div className="product-box" key={product.id}>
                  <div
                    className="product-box-img"
                    id="product_img"
                    onClick={() => [
                      navigate(product.name.replace(/\s+/g, "")),
                      dispatch(pushSingle_product(product)),
                    ]}
                  >
                    <img src={product.image} alt="product" />
                  </div>
                  <p>{product.name}</p>
                  <strong>
                    <span>$999</span>
                    {product.price}
                  </strong>
                  <button
                    className="product-box-addCart-btn"
                    id="addCartBtn"
                    onClick={() => [
                      dispatch(addInCart(product)),
                      dispatch(calculateItems()),
                      setCartAddedPopup(true),
                    ]}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SomeProducts;
