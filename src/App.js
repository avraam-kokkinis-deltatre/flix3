import { Route, Routes, Link } from "react-router-dom"

import Home from "./Routes/Home/Home";
import MovieInner from "./Routes/MovieInner/MovieInner";
import MoviePlayer from "./Routes/MoviePlayer/MoviePlayer";

import './App.css'

function App() {
  return (

    <>

    <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/movie" element={<MovieInner />} />
        <Route path="/moviePlayer" element={<MoviePlayer />} />
    </Routes>
</>

  );
}

export default App;
