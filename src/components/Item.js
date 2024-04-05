import React from "react";

const Item = () => {
  return (
    <div className="">
      <div className=" text-gray-700 font-medium grid grid-cols-6 gap-1 my-1 ">
        <p className="p-1 bg-white ">Name</p>
        <p className="p-1 bg-white ">Name</p>
        <p className="p-1 bg-white ">Name</p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add 1
        </button>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add 2
        </button>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add 3
        </button>
      </div>
    </div>
  );
};

export default Item;
