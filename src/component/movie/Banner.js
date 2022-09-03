import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { fetcher } from "../../configure";
import useSWR from "swr";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=6696edaaf6da24b96f29b53d1d64419d`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[550px] page-container mb-5 overflow-hidden">
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
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0  bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className=" absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-3">
          {item.title}
          <div className="flex items-center gap-x-3">
            <span className="py-2 px-4 border border-white rounded-md">
              Action
            </span>
            <span className="py-2 px-4 border border-white rounded-md">
              Action
            </span>{" "}
            <span className="py-2 px-4 border border-white rounded-md">
              Action
            </span>
            <button className="py-3 px-6"></button>
          </div>
        </h2>
      </div>
    </div>
  );
}
export default Banner;
