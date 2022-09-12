import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../configure";
import MovieCard, { MovieCardSkeleton } from "../movie/MovieCard";
import useDebounce from "../hook/useDebounce";
import ReactPaginate from "react-paginate";
import { v4 } from "uuid";
const itemsPerPage = 20;
const MoviePages = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=6696edaaf6da24b96f29b53d1d64419d&page=${nextPage}`
  );
  const searchDebounce = useDebounce(search, 500);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  const loading = !data && !error;
  useEffect(() => {
    if (searchDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=6696edaaf6da24b96f29b53d1d64419d&query=${searchDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=6696edaaf6da24b96f29b53d1d64419d&page=${nextPage}`
      );
    }
  }, [searchDebounce, nextPage]);
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <div className="mt-5 text-white page-container">
      <div className="flex mb-10">
        <div className="flex-1 ">
          <input
            type="text"
            name=""
            id=""
            className="w-full p-2 text-black "
            placeholder="Search Film"
            onChange={handleSearch}
          />
        </div>
        <button className="p-2 text-white bg-primary">
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
      {/* {loading && (
        <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )} */}
      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(itemsPerPage).fill(0).map(() => (
            <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
          ))}
        </div>
      )}
      <div className="grid grid-cols-4 gap-5">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePages;
