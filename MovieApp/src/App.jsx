import MovieDetails from "./Pages/MovieDetails";
import Movies from "./Pages/Movies";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";
import Notfound from "./Pages/Notfound";
import Footer from "./Pages/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/toprated" element={<Movies />} />
        <Route path="/popular" element={<Movies />} />
        <Route path="/upcoming" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
      *  <Route path="*" element={<Notfound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
