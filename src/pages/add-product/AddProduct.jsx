import { useDispatch, useSelector } from "react-redux";
// context
import { useContext, useState } from "react";
import Gl_context from "../../context/ContextApi";

// components
import "./AddProduct.css";
import "./AddProduct.responsive.css";
import NewProductAdded from "../../components/popup/newProductAddedPopup/NewProductAded";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

// redux
import { post_asyncThunk } from "../../Redux/reducers/fetchApi_reducer";

const AddProduct = () => {
  //
  const dispatch = useDispatch();

  const { newProductAddedPopup, setnewProductAddedPopup } =
    useContext(Gl_context);

  const [NewProductData, setNewProductData] = useState({});
  const [SelectedImage1, setSelectedImage1] = useState({
    name: "",
    show: "",
    data: null,
  });
  const [SelectedImage2, setSelectedImage2] = useState({
    name: "",
    show: "",
    data: null,
  });
  const handleDynamicTextareaChange = (event) => {
    const target = event.target;
    if (
      target &&
      target.tagName === "TEXTAREA" &&
      target.name === "description2"
    ) {
      setNewProductData({
        ...NewProductData,
        [event.target.name]: event.target.value,
      });
      handleProductValueChange(event);
    }
  };
  const handle_addMoreDescription = () => {
    const addProduct_descriptionWrap = document.getElementById(
      "addProduct_descriptionWrap"
    );
    addProduct_descriptionWrap.addEventListener(
      "change",
      handleDynamicTextareaChange
    );

    const textareaWrap = document.createElement("div");
    textareaWrap.classList.add("newDescription_Container");

    // textarea box creation
    const textarea = document.createElement("textarea");
    textarea.classList.add("addProduct-descriptionBox-textarea");
    textarea.setAttribute("placeholder", "description");
    textarea.setAttribute("name", "description2");

    // Add onchange event listener
    textarea.addEventListener("change", handleProductValueChange);

    // textarea box deletion
    const deleteTextarea = document.createElement("div");
    deleteTextarea.classList.add("remove-newTextArea");
    deleteTextarea.textContent = "delete";
    deleteTextarea.addEventListener("click", (e) => {
      textareaWrap.remove(e);
    });

    // append in container
    textareaWrap.appendChild(textarea);
    textareaWrap.appendChild(deleteTextarea);

    // append container in addProduct_descriptionWrap
    addProduct_descriptionWrap.appendChild(textareaWrap);
  };

  // images functionality
  const addProductImage_onchange1 = (event) => {
    const file = event.target.files[0];
    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        // Convert the result to a base64 string
        setSelectedImage1({
          name: file.name,
          data: reader.result,
          show: reader.result.toString(),
        });
        setNewProductData({
          ...NewProductData,
          [event.target.name]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const addProductImage_onchange2 = (event) => {
    const file = event.target.files[0];
    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        // Convert the result to a base64 string
        setSelectedImage2({
          name: file.name,
          data: reader.result,
          show: reader.result.toString(),
        });
        setNewProductData({
          ...NewProductData,
          [event.target.name]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductValueChange = (event) => {
    setNewProductData({
      ...NewProductData,
      [event.target.name]: event.target.value,
    });
    console.log(NewProductData);
  };

  const { ApiProducts } = useSelector((state) => state.fetchApi_reducerKey);
  const newProductId = ApiProducts.length + 1;
  const body = {
    id: newProductId,
    ...NewProductData,
  };

  const submitAddProduct = async (e) => {
    e.preventDefault();

    dispatch(post_asyncThunk(body));
    setnewProductAddedPopup(true);
    resetForm();
  };

  const resetForm = () => {
    // Reset input fields
    setNewProductData({});

    setSelectedImage1({ name: "", show: "", data: null });
    setSelectedImage2({ name: "", show: "", data: null });
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      {newProductAddedPopup && <NewProductAdded />}

      <div className="addProductMainwrap">
        <div className="container">
          <div className="addProduct">
            {/* heading */}
            <div className="addProduct-heading">
              <p>add product</p>
            </div>
            {/* content */}
            <form action="/addProduct" onSubmit={submitAddProduct} id="form">
              <div className="addProduct-content">
                {/* name */}
                <div className="addProduct-nameBox">
                  <p>product name</p>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    required
                    value={NewProductData.name || ""}
                    onChange={handleProductValueChange}
                  />
                </div>
                {/* description */}
                <div className="addProduct-descriptionBox">
                  <p>product description</p>
                  <div id="addProduct_descriptionWrap">
                    <textarea
                      placeholder="description"
                      className="addProduct-descriptionBox-textarea"
                      name="description1"
                      required
                      value={NewProductData.description1 || ""}
                      onChange={handleProductValueChange}
                    ></textarea>
                  </div>
                  <div
                    className="addProduct-addDesription-btn"
                    onClick={handle_addMoreDescription}
                  >
                    add more description
                  </div>
                </div>
                {/* price  */}
                <div className="addProduct-priceBox">
                  <p>product price</p>
                  <input
                    type="number"
                    placeholder="price"
                    name="price"
                    required
                    value={NewProductData.price || ""}
                    onChange={handleProductValueChange}
                  />
                </div>
                {/* images */}
                <div className="addProduct-imagesBox">
                  <p>product images</p>
                  <div className="addProduct-imageBox-images">
                    <div className="imageBox-images-wrap">
                      <input
                        type="file"
                        name="image"
                        required
                        onChange={() => addProductImage_onchange1(event)}
                      />
                      <div className="imageBox-images-slectedImageShow">
                        {SelectedImage1.data && (
                          <div>
                            <img src={SelectedImage1.show} alt="img" />
                          </div>
                        )}
                        {!SelectedImage1.data && (
                          <div>
                            <i className="fa-solid fa-plus"></i>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="imageBox-images-wrap">
                      <input
                        type="file"
                        name="image1"
                        onChange={() => addProductImage_onchange2(event)}
                      />
                      <div className="imageBox-images-slectedImageShow">
                        {SelectedImage2.data && (
                          <div>
                            <img src={SelectedImage2.show} alt="img" />
                          </div>
                        )}
                        {!SelectedImage2.data && (
                          <div>
                            <i className="fa-solid fa-plus"></i>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-section">
                  {/* form reset btn  */}
                  <div className="resetForm-btn" onClick={resetForm}>
                    reset data
                  </div>
                  {/* add btn  */}
                  <button type="submit" className="submit-productInApi-btn">
                    submit Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddProduct;
