import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [retailList, setRetailList] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToRetailList = (data) => {
    console.log(data);
    setRetailList((prev) => [...prev, data]);
  };

  const updateToRetailList = (updatedItem) => {
    setRetailList((prevRetailList) => {
      return prevRetailList.map((item) => {
        if (item._id === updatedItem._id) {
          return updatedItem;
        }
        return item;
      });
    });
  };

  const contextValue = {
    retailList,
    cartItems,
    setCartItems,
    addToRetailList,
    updateToRetailList,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
