import "./App.css";
import "swiper/css";
import { Route, Routes } from "react-router";
import Main from "./component/layout/Main";
import HomePages from "./component/pages/HomePages";
import MoviePages from "./component/pages/MoviePages";
import MovieDetail from "./component/pages/MovieDetail";
function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/movies" element={<MoviePages />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetail />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
//APIKEY 6696edaaf6da24b96f29b53d1d64419d
