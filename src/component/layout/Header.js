import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-10 mb-5 text-lg text-white header gap-x-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </header>
  );
};

export default Header;
