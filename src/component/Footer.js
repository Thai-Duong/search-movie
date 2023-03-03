import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
const Footer = () => {
  return (
    <Row className="py-5 text-center text-white bg-black">
      <Col span={8} className="flex flex-col gap-y-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Contact us</NavLink>
        <NavLink to="/">Term of services</NavLink>
        <NavLink to="/">About us</NavLink>
      </Col>
      <Col span={8} className="flex flex-col gap-y-5">
        {" "}
        <NavLink to="/">Live</NavLink>
        <NavLink to="/">FAQ</NavLink>
        <NavLink to="/">Premium</NavLink>
        <NavLink to="/">Pravacy policy</NavLink>
      </Col>
      <Col span={8} className="flex flex-col gap-y-5">
        {" "}
        <NavLink to="/">You must watch</NavLink>
        <NavLink to="/">Recent release</NavLink>
        <NavLink to="/">Top IMDB</NavLink>
        <NavLink to="/">@DuongThai 2022</NavLink>
      </Col>
    </Row>
  );
};

export default Footer;
