import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../configure";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=6696edaaf6da24b96f29b53d1d64419d`,
    fetcher
  );
  const isLoading = !data && !error;
  const movies = data?.results || [];
  return (
    <div className="movies-list">
      {isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCardSkeleton></MovieCardSkeleton>
          </SwiperSlide>
        </Swiper>
      )}
      {!isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default MovieList;
