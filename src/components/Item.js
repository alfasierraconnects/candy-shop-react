import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const Item = (props) => {
  // const [available, setAvailable] = useState(true);

  const { cartItems, setCartItems, retailList, updateToRetailList } =
    useContext(StoreContext);

  const add = (quantity) => {
    const id = props.id;
    console.log(quantity);

    // Find the item in the retail list
    const itemInRetail = retailList.find((item) => item._id === id);

    if (!itemInRetail) {
      // If item is not found, log an error and return
      console.error(`Item with id ${id} not found in retailList`);
      return;
    }

    if (itemInRetail.quantity < quantity) {
      // If quantity is not available, set available to false and return
      console.error(`Quantity not available for item with id ${id}`);
      // setAvailable(false);
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
  };

  return (
    <div className="">
      <div className="text-gray-700 font-medium grid grid-cols-6 gap-1 my-1">
        <p className="p-1 bg-white">{props.candyName}</p>
        <p className="p-1 bg-white">{props.description}</p>
        <p className="p-1 bg-white">{props.price}</p>
        <button
          onClick={() => add(1)}
          className="bg-amber-600 active:bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add 1
        </button>
        <button
          onClick={() => add(2)}
          className="bg-amber-600 active:bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add 2
        </button>
        <button
          onClick={() => add(3)}
          className="bg-amber-600 active:bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add 3
        </button>
      </div>
    </div>
  );
};

export default Item;
