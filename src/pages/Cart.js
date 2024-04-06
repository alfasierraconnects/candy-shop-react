import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cartItems, retailList } = useContext(StoreContext);

  // Calculate total price for each item type in the cart
  const cartItemsWithTotalPrice = cartItems.map((cartItem) => {
    const itemInRetail = retailList.find((item) => item._id === cartItem._id);
    const totalPrice = itemInRetail
      ? itemInRetail.price * cartItem.quantity
      : 0;
    return {
      ...cartItem,
      candyName: itemInRetail ? itemInRetail.candyName : "",
      price: itemInRetail ? Number(itemInRetail.price) : 0,
      totalPrice,
    };
  });

  // Calculate subtotal
  const subtotal = cartItemsWithTotalPrice.reduce(
    (acc, cartItem) => acc + cartItem.totalPrice,
    0
  );

  return (
    <div className="p-20">
      <h1 className="text-amber-900 font-semibold text-lg mb-4">Cart Page</h1>
      <div className="text-white font-semibold text-lg grid grid-cols-6 rounded-t-md gap-1 overflow-hidden">
        <p className="col-span-2 text-center bg-amber-500 py-1">Name</p>
        <p className="col-span-2 text-center bg-amber-500 py-1">Quantity</p>
        <p className="col-span-1 text-center bg-amber-500 py-1">Price</p>
        <p className="col-span-1 text-center bg-amber-500 py-1">Total Price</p>
      </div>
      <hr className="border-amber-500" />
      <div className="mb-4">
        {cartItemsWithTotalPrice.map((cartItem) => (
          <div
            key={cartItem._id}
            className="text-white font-medium text-lg grid grid-cols-6 gap-1 my-1"
          >
            <p className="col-span-2 p-1 bg-white text-gray-800">
              {cartItem.candyName}
            </p>
            <p className="col-span-2 p-1 bg-white text-gray-800">
              {cartItem.quantity}
            </p>
            <p className="col-span-1 p-1 bg-white text-gray-800">
              &#8377; {cartItem.price.toFixed(2)}
            </p>
            <p className="col-span-1 p-1 bg-amber-100 text-gray-800">
              &#8377; {cartItem.totalPrice.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="text-red-600 font-semibold text-lg mb-4">
          Subtotal: &#8377; {subtotal.toFixed(2)}
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Print
        </button>
      </div>
    </div>
  );
};

export default Cart;
