import React from "react";
import { Routes, Route } from "react-router-dom";
import Retailer from "./pages/Retailer";
import Cart from "./pages/Cart";
import Customer from "./pages/Customer";
import Navbar from "./components/Navbar";
import StoreContextProvider from "./context/StoreContext";

const App = () => {
  return (
    <div className="min-h-screen bg-amber-200">
      <Navbar />
      <StoreContextProvider>
        <Routes>
          <Route path="/retailer" element={<Retailer />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </StoreContextProvider>
    </div>
  );
};

export default App;
