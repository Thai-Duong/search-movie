import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
