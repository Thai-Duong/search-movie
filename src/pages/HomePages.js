import React, { Fragment } from "react";
import Banner from "../component/movie/Banner";
import MovieList from "../component/movie/MovieList";
const HomePages = () => {
  return (
    <Fragment>
      <Banner />
      <section className="pb-5 movie-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white">Now Playing</h2>
        <MovieList />
      </section>
      <section className="pb-5 movie-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white">Top Rate</h2>
        <MovieList type="popular" />
      </section>
      <section className="pb-5 movie-layout page-container">
        <h2 className="mb-5 text-3xl font-bold text-white">Trending</h2>
        <MovieList type="top_rated" />
      </section>
    </Fragment>
  );
};

export default HomePages;
