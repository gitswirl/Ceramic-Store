import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import "./Shop.css";
import "./Shop.responsive.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PopupItemAded from "../../components/popup/cartItemAddedPopup/PopupItemAded";

// redux
import {
  del_asyncThunk,
  fetch_asyncThunk,
} from "../../Redux/reducers/fetchApi_reducer";
import {
  addInCart,
  calculateItems,
} from "../../Redux/reducers/addInCart_reducer";
import { pushSingle_product } from "../../Redux/reducers/soloProduct_reducer";

// context
import Gl_context from "../../context/ContextApi";

const Shop = () => {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetch_asyncThunk());
  }, [dispatch]);

  const { ApiProducts, loading } = useSelector(
    (state) => state.fetchApi_reducerKey
  );

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
      <Navbar />

      <div className="my-products" id="products">
        <div className="container">
          <div className="products-heading">All products</div>

          <div className="All_Products" id="productsList">
            {ApiProducts &&
              ApiProducts.map((product) => (
                <div className="product-box" key={product.id}>
                  <div
                    className="product-box-img"
                    id="product_img"
                    onClick={() => [
                      navigate(`/${product.name.replace(/\s+/g, "")}`),
                      dispatch(pushSingle_product(product)),
                    ]}
                  >
                    <img src={product.image} alt="product" />
                  </div>
                  <div
                    className="deleteProductInApi"
                    onClick={() => dispatch(del_asyncThunk(product.id))}
                  >
                    delete
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

      <Footer />
    </>
  );
};

export default Shop;
