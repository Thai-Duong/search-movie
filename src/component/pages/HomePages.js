import React, { Fragment } from "react";
import Banner from "../movie/Banner";
import MovieList from "../movie/MovieList";

const HomePages = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <section className="pb-5 movie-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white">Now Playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="pb-5 movie-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white">Top Rate</h2>
        <MovieList type="popular"></MovieList>
      </section>
      <section className="pb-5 movie-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white">Trending</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePages;
