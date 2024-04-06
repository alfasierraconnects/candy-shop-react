import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const { cartItems } = useContext(StoreContext);

  // Calculate total quantity in the cart
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="flex justify-between p-10 bg-amber-600 font-semibold text-lg text-white">
      <div className="flex gap-4">
        <Link to="/retailer" className="hover:text-amber-950">
          Retailer
        </Link>
        <Link to="/customer" className="hover:text-amber-950">
          Customer
        </Link>
      </div>

      <div className=" flex gap-4">
        <Link to="/cart" className="hover:text-amber-950">
          Cart
        </Link>
        <p className="bg-amber-400 rounded-full h-7 w-7 text-center">
          {totalQuantity}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
