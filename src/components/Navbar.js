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
        <Link to="/cart" className="hover:text-amber-950">
          Cart
        </Link>
      </div>
      <div className="">Cart Count</div>
    </nav>
  );
};

export default Navbar;
