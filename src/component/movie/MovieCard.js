import React from "react";
import { useNavigate } from "react-router";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/movies/${item.id}`)}
      className="relative w-full h-full text-white bg-slate-800"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
        className="w-full h-[400px] object-cover block"
      />
      <h3 className="absolute  bottom-0 left-0 w-full p-2 text-lg font-bold bg-gradient-to-t  from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]">
        {item.title}
      </h3>
      <div className="absolute top-0 right-0 p-2 text-black bg-primary">
        {item.vote_average}
      </div>
    </div>
  );
};
export default MovieCard;
export const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white select-none movie-card bg-slate-800">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold">
          <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>
            <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton width="30px" height="10px"></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton
          width="100%"
          height="45px"
          radius="6px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};
