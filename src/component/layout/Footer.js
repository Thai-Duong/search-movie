import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black w-full h-[250px] flex items-center mt-5 justify-center gap-40 text-white">
      <div className="flex flex-col gap-y-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Contact us</NavLink>
        <NavLink to="/">Term of services</NavLink>
        <NavLink to="/">About us</NavLink>
      </div>
      <div className="flex flex-col gap-y-5">
        <NavLink to="/">Live</NavLink>
        <NavLink to="/">FAQ</NavLink>
        <NavLink to="/">Premium</NavLink>
        <NavLink to="/">Pravacy policy</NavLink>
      </div>
      <div className="flex flex-col gap-y-5">
        <NavLink to="/">You must watch</NavLink>
        <NavLink to="/">Recent release</NavLink>
        <NavLink to="/">Top IMDB</NavLink>
        <NavLink to="/">@DuongThai 2022</NavLink>
      </div>
    </div>
  );
};

export default Footer;
