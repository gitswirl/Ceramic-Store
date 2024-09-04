// components
import { useContext } from "react";
import "./NewProductAded.css";
import "./NewProductAded.responsive.css";

import { useNavigate } from "react-router-dom";
import Gl_context from "../../../context/ContextApi";

const NewProductAded = () => {
  //
  const navigate = useNavigate();
  const { setnewProductAddedPopup } = useContext(Gl_context);

  const handleViewAddedProduct = () => {
    navigate("/Store");
    setnewProductAddedPopup(false);
  };

  const handleAddNewProduct = () => {
    setnewProductAddedPopup(false);
  };

  return (
    <>
      <div className="yourProductAdded-container">
        <div className="yourProductAdded-content">
          <p>your product is added.</p>
          <div
            className="yourProductAdded-btn"
            onClick={handleViewAddedProduct}
          >
            view
          </div>
          <div className="yourProductAdded-btn" onClick={handleAddNewProduct}>
            add new
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProductAded;
