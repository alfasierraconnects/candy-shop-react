import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [retailList, setRetailList] = useState([]);
  // const [cartItems, setCartItems] = useState({});

  const addToRetailList = (data) => {
    console.log(data);
    setRetailList((prev) => [...prev, data]);
  };

  const contextValue = {
    retailList,
    // cartItems,
    addToRetailList,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
