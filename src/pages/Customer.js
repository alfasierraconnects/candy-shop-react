import React from "react";
import Item from "../components/Item";

const Customer = () => {
  return (
    <div className="p-20">
      <div className=" text-white font-semibold text-lg grid grid-cols-6 rounded-t-md gap-1 overflow-hidden">
        <p className="col-span-1 text-center bg-amber-500 py-1">Name</p>
        <p className="col-span-1 text-center bg-amber-500 py-1">Description</p>
        <p className="col-span-1 text-center bg-amber-500 py-1">Price</p>
        <p className="col-span-3 text-center bg-amber-500 py-1">Add to cart</p>
      </div>
      <hr className="border-amber-500" />
      <Item />
    </div>
  );
};

export default Customer;
