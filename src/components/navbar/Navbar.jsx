import { useSelector } from "react-redux";
import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Components
import "./Navbar.css";
import "./Navbar.responsive.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { totalItem } = useSelector((state) => state.addInCart_reducerKey);

  const nav_ul = useRef(null);
  const burgerIcon = useRef(null);
  const handleToggleNav = () => {
    if (nav_ul.current || burgerIcon.current) {
      nav_ul.current.classList.toggle("wrap-02_Navigation-Ul_SCRIPT");
      burgerIcon.current.classList.toggle("header-nav-toggle-icon_SCRIPT");
    }
  };
  return (
    <>
      <header>
        <div className="header">
          <nav id="headerNav">
            <div className="nav-section-wrap-01">
              <div className="nav-01-search-input">
                <div className="search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input
                  className="nav-01-search-input_input"
                  type="search"
                  placeholder="search..."
                />
              </div>
              <Link to="/Cart" className="nav-01-cart-wrap" id="carIcon">
                <p>cart</p>
                <div className="cart-icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <div id="totalQuantity" className="totalQuantity">
                    {totalItem}
                  </div>
                </div>
              </Link>
            </div>
            <div className="nav-section-wrap-02">
              <div className="logo">
                <a href="/">C E R A M I C - S T U D I O</a>
              </div>

              <ul
                className="wrap-02_Navigation-Ul"
                id="headerNavigation"
                ref={nav_ul}
              >
                <li>
                  <Link
                    to="/"
                    className={location.pathname === "/" ? "active-anncor" : ""}
                  >
                    home
                  </Link>
                </li>
                <li>
                  <div
                    className={
                      location.pathname === "/Store" ? "active-anncor" : ""
                    }
                    onClick={() => navigate("/Store")}
                  >
                    products
                  </div>
                </li>
                <li>
                  <Link
                    to="/About"
                    className={
                      location.pathname === "/About" ? "active-anncor" : ""
                    }
                  >
                    about
                  </Link>
                </li>
                <li>
                  <div
                    className="contactAncor"
                    onClick={() => navigate("/Contact")}
                  >
                    contact
                  </div>
                </li>
                <li>
                  <div
                    className={
                      location.pathname === "/Add-product"
                        ? "active-anncor addProduct"
                        : "addProduct"
                    }
                    onClick={() => navigate("/Add-product")}
                  >
                    add product
                  </div>
                </li>
              </ul>
              <div
                className="header-nav-toggle-icon"
                onClick={handleToggleNav}
                ref={burgerIcon}
              >
                <i className="fa-solid fa-bars"></i>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
