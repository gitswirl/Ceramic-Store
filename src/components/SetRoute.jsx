import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home/Home"));
const About = React.lazy(() => import("../pages/about/About"));
const Contact = React.lazy(() => import("../pages/contact/Contact"));
const Store = React.lazy(() => import("../pages/store/Shop"));
const Cart = React.lazy(() => import("../pages/cart/Carts"));
const Product = React.lazy(() => import("../pages/solo-product/Product"));
const AddProduct = React.lazy(() => import("../pages/add-product/AddProduct"));

import NotFound from "./NotFound";

const SetRoute = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location]);

  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/Store" exact element={<Store />} />
          <Route path="/Cart" exact element={<Cart />} />

          <Route path="*" exact element={<NotFound />} />
          <Route path=":slug" exact element={<Product />} />
          <Route path="Add-product" exact element={<AddProduct />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default SetRoute;
