import React, { useContext } from "react";
import Item from "../components/Item";
import { StoreContext } from "../context/StoreContext";

const Customer = () => {
  const { retailList } = useContext(StoreContext);

  return (
    <div className="p-20">
      <div className="text-white font-semibold text-lg grid grid-cols-6 rounded-t-md gap-1 overflow-hidden">
        <p className="col-span-1 text-center bg-amber-500 py-1">Name</p>
        <p className="col-span-1 text-center bg-amber-500 py-1">Description</p>
        <p className="col-span-1 text-center bg-amber-500 py-1">Price</p>
        <p className="col-span-3 text-center bg-amber-500 py-1">Add to cart</p>
      </div>
      <hr className="border-amber-500" />
      {retailList.map((el) => (
        <Item
          key={el._id}
          id={el._id}
          candyName={el.candyName}
          description={el.description}
          price={el.price}
          quantity={el.quantity}
        />
      ))}
    </div>
  );
};

export default Customer;
