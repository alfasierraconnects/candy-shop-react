import React from "react";
import { Route, Routes } from "react-router-dom";
import Retailer from "./pages/Retailer";
import Cart from "./pages/Cart";
import Customer from "./pages/Customer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-amber-200">
      <Navbar />
      <Routes>
        <Route path="/retailer" element={<Retailer />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
