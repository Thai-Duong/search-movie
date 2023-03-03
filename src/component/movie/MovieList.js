import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../configure";
import MovieCard from "./MovieCard";
const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=6696edaaf6da24b96f29b53d1d64419d`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="movies-list">
      <Swiper grabCursor={"true"} spaceBetween={5} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
