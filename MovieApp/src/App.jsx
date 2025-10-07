import MovieDetails from "./Pages/MovieDetails";
import Movies from "./Pages/Movies";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";
import Notfound from "./Pages/Notfound";
import Footer from "./Pages/Footer";
import { ScrollTop } from "./Pages/ScrollTop";

function App() {
  return (
    <BrowserRouter>
     <ScrollTop/> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies apipath="movie/now_playing" />} />
        <Route path="/toprated" element={<Movies  apipath="movie/top_rated"/>} />
        <Route path="/popular" element={<Movies apipath="movie/popular" />} />
        <Route path="/upcoming" element={<Movies apipath="movie/upcoming"/>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search apipath="search/movie"/>} />
         <Route path="*" element={<Notfound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
