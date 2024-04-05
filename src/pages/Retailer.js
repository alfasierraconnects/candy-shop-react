import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Retailer = () => {
  // const { setRetailList } = useContext(StoreContext);

  const addToRetailList = (event) => {
    event.preventDefault();

    const newList = {
      _id: Math.random(),
      candyName: event.target.candyName.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };

    console.log(newList);
    // setRetailList((prev) => [...prev, newList]);
  };

  return (
    <div className="flex justify-center py-20">
      <form
        onSubmit={addToRetailList}
        className="flex flex-col justify-center gap-4 bg-white shadow-md rounded p-8 w-1/3"
      >
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          id="candyName"
          type="text"
          placeholder="Candy name"
          required
        />
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          placeholder="Description"
          required
        />
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          id="price"
          type="number"
          placeholder="Price"
          required
        />
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          id="quantity"
          type="number"
          placeholder="Quantity"
          required
        />
        <button
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Retailer;
