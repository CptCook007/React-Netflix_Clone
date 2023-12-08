import { useEffect, useState } from "react";
import { ROW_BASE_IMAGE_URL } from "../../data";
import axios from "axios";

// import movieTrailer from "movie-trailer";
function Row({ title, requestUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(requestUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [requestUrl]);
  return (
    <>
      <div className="text-white font-bold ps-14 text-xl">
        <h3>{title}</h3>
      </div>
      <div className="flex relative items-center">
        <div
          className="text-white overflow-x-scroll ms-16 overflow-y-hidden scroll-smooth scrollbar-hide  flex p-10"
          id={"slider"}
        >
          {movies.map((movie) => (
            <div
              className="flex-shrink-0 pe-5 hover:scale-105 lg:hover:scale-110 hover:z-10 transition-transform ease-in-out duration-500 cursor-pointer relative lg:w-[280px]"
              key={movie?.id}
            >
              <img
                className="w-full h-auto"
                src={ROW_BASE_IMAGE_URL + movie?.backdrop_path}
              ></img>
              <div className="absolute top-0 w-full h-full  hover:w-[94%] hover:bg-black/60  opacity-0 hover:opacity-100">
                <p className="whitespace-normal text-xs font-bold flex justify-center h-full items-center text-center">
                  {movie?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Row;
