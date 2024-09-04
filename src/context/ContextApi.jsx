import { createContext, useState } from "react";

const Gl_context = createContext();
export default Gl_context;

export const Gl_provider = ({ children }) => {
  const [CartAddedPopup, setCartAddedPopup] = useState(false);
  const [newProductAddedPopup, setnewProductAddedPopup] = useState(false);

  if (CartAddedPopup) {
    setTimeout(() => {
      setCartAddedPopup(false);
    }, 500);
  }
  // if (newProductAddedPopup) {
  //   setTimeout(() => {
  //     setnewProductAddedPopup(false);
  //   }, 500);
  // }

  return (
    <>
      <Gl_context.Provider
        value={{
          CartAddedPopup,
          setCartAddedPopup,
          newProductAddedPopup,
          setnewProductAddedPopup,
        }}
      >
        {children}
      </Gl_context.Provider>
    </>
  );
};
