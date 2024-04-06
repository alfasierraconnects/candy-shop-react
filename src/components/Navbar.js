import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <p>0</p>
      </div>
    </nav>
  );
};

export default Navbar;
