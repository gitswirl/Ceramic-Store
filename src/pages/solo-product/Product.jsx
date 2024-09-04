import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import "./SingleProduct.css";
import "./SingleProduct.Responsive.css";
import PopupItemAded from "../../components/popup/cartItemAddedPopup/PopupItemAded";

// redux
import {
  addInCart,
  calculateItems,
} from "../../Redux/reducers/addInCart_reducer";

// context
import Gl_context from "../../context/ContextApi";

const Product = () => {
  //
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseSingleProduct = () => {
    navigate(-1);
  };

  // redux
  const { product } = useSelector((state) => state.soloProduct_reducerKey);

  // context
  const { CartAddedPopup, setCartAddedPopup } = useContext(Gl_context);

  return (
    <>
      {CartAddedPopup && <PopupItemAded />}

      {product ? (
        <div>
          <div className="singleProduct">
            <div className="container">
              <div className="singleProduct-close__Btn">
                <p onClick={handleCloseSingleProduct}>
                  <i className="fa-solid fa-xmark"></i>
                </p>
              </div>
              {product.map((elem) => (
                <div className="singleProduct-flex" key={elem.id}>
                  <div className="singleProduct-img">
                    <img src={elem.image} alt="product" />
                  </div>
                  <div className="singleProduct-text">
                    <p className="singleProduct-name">{elem.name}</p>
                    <p className="singleProduct-specs">{elem.description1}</p>
                    <p className="singleProduct-quality">
                      <span>quality : </span>
                      {elem.description2}
                    </p>
                    <p className="singleProduct-price">
                      <span>price : </span>
                      {elem.price}
                    </p>
                    <div
                      className="singleProduct-addCartBtn"
                      onClick={() => [
                        dispatch(addInCart(elem)),
                        dispatch(calculateItems()),
                        setCartAddedPopup(true),
                      ]}
                    >
                      add to cart
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <p>something went wrong</p>
        </>
      )}
    </>
  );
};

export default Product;
