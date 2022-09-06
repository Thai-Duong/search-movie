import React from "react";
import { useNavigate } from "react-router";
import Button from "../button/Button";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
        className="w-full h-[400px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold ">{item.title}</h3>
        <div className="flex items-center justify-between mb-5">
          <span>{new Date(item.release_date).getFullYear()}</span>
          <span>{item.vote_average}</span>
        </div>
        <Button
          className="bg-black"
          onClick={() => navigate(`/movies/${item.id}`)}
        >
          Watch Now
        </Button>
      </div>
    </div>
  );
};
export default MovieCard;
export const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
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
