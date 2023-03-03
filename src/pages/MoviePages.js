import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../configure";
import MovieCard from "../component/movie/MovieCard";
import useDebounce from "../component/hook/useDebounce";
import ReactPaginate from "react-paginate";
import { Input } from "antd";
const { Search } = Input;
const itemsPerPage = 20;
const MoviePages = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=6696edaaf6da24b96f29b53d1d64419d&page=${nextPage}`
  );
  const searchDebounce = useDebounce(search, 1000);
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
        <Search
          placeholder="Name of Movie"
          allowClear
          enterButton="Search"
          size="large"
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-5 gap-5">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => <MovieCard key={item.id} item={item} />)}
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
