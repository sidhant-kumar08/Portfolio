import React from "react";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div className="hidden md:block">

      <Navbar />
    </div>

    <div className="block md:hidden">
      <MobileNavbar />
    </div>

      <Outlet />
      <Footer />

    </>
  );
}

export default App;
