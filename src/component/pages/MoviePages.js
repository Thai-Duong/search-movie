import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../configure";
import MovieCard from "../movie/MovieCard";
import MovieList from "../movie/MovieList";

const MoviePages = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=6696edaaf6da24b96f29b53d1d64419d`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <div className="page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            name=""
            id=""
            className="w-full p-4"
            placeholder="Search Film"
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePages;
