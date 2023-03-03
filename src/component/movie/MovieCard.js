import React from "react";
import { useNavigate } from "react-router";
import { Card, Typography } from "antd";
const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/movies/${item.id}`)}
      hoverable
      style={{
        width: 240,
        height: 450,
      }}
      cover={
        <img
          alt="anh"
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        />
      }
      className="relative"
    >
      <div className="absolute top-0 right-0 p-2 text-black bg-primary">
        {item.vote_average}
      </div>
      <Typography>{item.title}</Typography>
    </Card>
  );
};
export default MovieCard;
