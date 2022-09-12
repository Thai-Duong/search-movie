import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetcher } from "../../configure";
import useSWR from "swr";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=6696edaaf6da24b96f29b53d1d64419d`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner  h-[550px] mb-5 overflow-hidden">
      <Swiper grabCursor={"true"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItems item={item}></BannerItems>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItems({ item }) {
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0  bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white left-5 bottom-5">
        <h2 className="mb-3 text-3xl font-bold">
          {item.title}
          <div className="flex items-center mt-3 gap-x-3">
            <span className="px-4 py-2 border border-white rounded-md">
              Action
            </span>
            <span className="px-4 py-2 border border-white rounded-md">
              Action
            </span>{" "}
            <span className="px-4 py-2 border border-white rounded-md">
              Action
            </span>
          </div>
        </h2>
      </div>
    </div>
  );
}
export default Banner;
