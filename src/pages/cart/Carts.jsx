import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// component
import "./Carts.css";
import "./Carts.responsive.css";
import "./CheckoutBox.css";

// redux
import { pushSingle_product } from "../../Redux/reducers/soloProduct_reducer";
import {
  hitQuantityDown,
  hitQuantityUp,
  calculateItems,
  removeInCart,
} from "../../Redux/reducers/addInCart_reducer";

const Carts = () => {
  //
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleGoBack() {
    return navigate(-1);
  }

  const chexkoutDiv = useRef(null);
  const toggleCheckoutBox = () => {
    chexkoutDiv.current.classList.toggle("checkout-box-wrap_Script");
  };

  // redux
  const { totalItem, cart } = useSelector(
    (state) => state.addInCart_reducerKey
  );

  const totalPrice = cart.reduce((initial, elem) => {
    const cleanPrice = elem.price.replace(/[^0-9.]+/g, "");
    const numericPrice = parseFloat(cleanPrice);

    return initial + numericPrice * elem.quantity;
  }, 0);
  return (
    <>
      <div className="checkoutBox_container">
        <div className="checkout-box-wrap" ref={chexkoutDiv}>
          <div className="checkoutBox_closer" onClick={toggleCheckoutBox}></div>
          <div className="checkoutBox" id="checkoutBox">
            <div className="checkoutBox-txt-heading">
              <p>summary</p>
            </div>
            <div className="checkoutBox-items__items-totalPrice">
              <div className="checkoutBox-items">items {totalItem}</div>
              <div className="checkoutBox-totalPrice"></div>
            </div>
            <div className="checkoutBox-shipping-box">
              <p className="shipping-box-txt-heading">shipping</p>
              <select className="checkoutBox-deliverySelect">
                <option className="deliverySelect-opt">
                  standard delivery
                </option>
                <option className="deliverySelect-opt">
                  premmium delivery
                </option>
              </select>
            </div>
            <div className="checkoutBox-giveCode-box">
              <p className="giveCode-box-txt-heading">give code</p>
              <form className="giveCode-input-wrap">
                <input type="text" placeholder="enter code" required />
                <button>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </form>
            </div>
            <div className="checkoutBox-fullOfTotal">
              <div className="fullOfTotal-text__total">
                <p className="fullOfTotal-text">total price</p>
                <p className="fullOfTotal-total">${totalPrice || 0}</p>
              </div>
            </div>
            <div className="checkout-submit-button">
              <button>proceed to buy</button>
            </div>
          </div>
        </div>
      </div>

      <div className="carts-main">
        <div className="container">
          <div className="logo__backBtn">
            <div className="carts-logo">
              <a href="/">C E R A M I C - S T U D I O</a>
            </div>
            <div className="backTo-btn" onClick={handleGoBack}>
              <div className="backText">go back</div>
              <i className="fa-solid fa-rotate-left"></i>
            </div>
          </div>

          <div className="carts-text">
            <p className="carts-heading">All Carts</p>
            <div className="totalResults__checkOutBtn">
              <p>{totalItem} results / items</p>
              <div className="checkout-btn" onClick={toggleCheckoutBox}>
                checkout
              </div>
            </div>
          </div>
          <div className="carts-box-container">
            {cart.length <= 0 && (
              <div className="No-Carts">
                <h1>your cart is empty.</h1>
              </div>
            )}

            {cart.length > 0 &&
              cart.map((product) => (
                <div className="cart-item" key={product.id}>
                  <div
                    className="cartItem-image"
                    onClick={() => [
                      dispatch(pushSingle_product(product)),
                      navigate(`/${product.name.replace(/\s+/g, "")}`),
                    ]}
                  >
                    <img src={product.image} />
                  </div>
                  <div className="cartItem-content">
                    <div className="cartItem-name__cartItem-delete-icon">
                      <p className="cartItem-name">{product.name}</p>
                      <div
                        className="cartItem-delete-icon"
                        id="delIcon"
                        onClick={() => [
                          dispatch(removeInCart(product)),
                          dispatch(calculateItems()),
                        ]}
                      >
                        <i className="fa-solid fa-xmark" id="cross"></i>
                      </div>
                    </div>
                    <div className="cartItem-price__cartItem-quantity-btn">
                      <p className="cartItem-price">{product.price}</p>
                      <div className="cartItem-quantity-btn">
                        <button
                          className="cartItem-quantity-dec"
                          id="cartItem-quantity-dec"
                          onClick={() => [
                            dispatch(hitQuantityDown(product)),
                            dispatch(calculateItems()),
                          ]}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="cartItem-quantity-view">
                          {product.quantity}
                        </p>
                        <button
                          className="cartItem-quantity-inc"
                          id="cartItem-quantity-inc"
                          onClick={() => [
                            dispatch(hitQuantityUp(product)),
                            dispatch(calculateItems()),
                          ]}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
