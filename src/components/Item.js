import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const Item = (props) => {
  const { cartItems, setCartItems, retailList, updateToRetailList } =
    useContext(StoreContext);

  const [errorMessage, setErrorMessage] = useState("");

  const add = (quantity) => {
    // console.log(props.candyName);
    const id = props.id;
    // console.log(quantity);

    // Find the item in the retail list
    const itemInRetail = retailList.find((item) => item._id === id);

    if (!itemInRetail) {
      setErrorMessage(`Item with id ${id} not found in retailList`);
      return;
    }

    if (itemInRetail.quantity < quantity) {
      setErrorMessage(`Quantity not available for ${props.candyName}`);
      return;
    }

    let updatedCartItems = [...cartItems];

    // Check if the item with the given id is already in the cart
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item._id === id
    );

    if (existingItemIndex !== -1) {
      // If the item is already in the cart, increase its quantity
      updatedCartItems[existingItemIndex].quantity += quantity;
    } else {
      // If the item is not in the cart, add it
      updatedCartItems.push({ _id: id, quantity });
    }

    // Decrement the quantity of the item in the retail list
    itemInRetail.quantity -= quantity;

    // Update the retail list
    updateToRetailList(itemInRetail);

    // Update the cart items
    setCartItems(updatedCartItems);

    // Clear the error message
    setErrorMessage("");
  };

  return (
    <div className="">
      <div className="text-gray-700 font-medium grid grid-cols-6 gap-1 my-1">
        <p className="p-1 bg-white">{props.candyName}</p>
        <p className="p-1 bg-white">{props.description}</p>
        <p className="p-1 bg-white">{props.price}</p>
        <button
          onClick={() => add(1)}
          disabled={errorMessage !== ""}
          className={`bg-amber-600 active:bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Add 1
        </button>
        <button
          onClick={() => add(2)}
          disabled={errorMessage !== ""}
          className="bg-amber-600 active:bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add 2
        </button>
        <button
          onClick={() => add(3)}
          disabled={errorMessage !== ""}
          className="bg-amber-600 active:bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add 3
        </button>
      </div>
      {errorMessage && (
        <p className="text-red-600 font-medium text-center animate-pulse">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Item;
