import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-3 text-lg text-white bg-black header gap-x-5">
      <NavLink to="/">
        <img
          src="http://www.truongphusteel.vn/img/upload/images/galaxy-logo-truongphusteel.png"
          alt=""
          className="w-20 h-9"
        />
      </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </header>
  );
};

export default Header;
