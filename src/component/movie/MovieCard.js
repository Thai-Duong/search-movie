import React from "react";
import { useNavigate } from "react-router";

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
