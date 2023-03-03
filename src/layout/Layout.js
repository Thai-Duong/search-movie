import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Router from "../router/Router";

const Layout = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
