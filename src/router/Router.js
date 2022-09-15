import React from "react";
import { Route, Routes } from "react-router";
import HomePages from "../pages/HomePages";
import MoviePages from "../pages/MoviePages";
import MovieDetail from "../pages/MovieDetail";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePages />}></Route>
      <Route path="/movies" element={<MoviePages />}></Route>
      <Route path="/movies/:movieId" element={<MovieDetail />}></Route>
    </Routes>
  );
};

export default Router;
