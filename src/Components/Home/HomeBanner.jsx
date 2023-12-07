import requests from "../../requests";
import { BANNER_BASE_IMAGE_URL } from "../../data";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlay, FaPlus } from "react-icons/fa";
export function HomeBanner() {
  const [movies, setMovies] = useState([{}]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => {
        console.log(response);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // movieTrailer(movie?.title).then((response) => console.log(response));
  console.log(movie);
  const bannerImage = BANNER_BASE_IMAGE_URL + movie?.backdrop_path;
  return (
    <>
      <div className="w-full h-[800px] pt-500 text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[800px] z-10 bg-gradient-to-tr from-black"></div>

          <img
            className="h-full w-full object-cover -z-20"
            src={bannerImage}
            alt={movie?.title}
          />
          <div className="absolute top-[20%] z-20 lg:ms-5 ms-0 lg:ps-24 p-10">
            <div>
              <p className="font-bold text-5xl  text-white mb-10">
                {movie?.title}
              </p>
              {movie && (
                <p className="font-bold text-xl text-white mb-10">
                  Release Date: {movie.release_date}
                </p>
              )}
              <div className="  flex gap-10">
                <button
                  className="bg-slate-700/30 flex gap-3  h-14 justify-center items-center align-middle
                 px-7 rounded text-white font-semibold text-xl hover:bg-black/70 transition-colors"
                >
                  <FaPlay></FaPlay>
                  Play
                </button>
                <button
                  className="bg-slate-700/30 flex gap-3  h-14 justify-center items-center align-middle
                 px-7 rounded text-white font-semibold text-xl hover:bg-black/70 transition-colors"
                >
                  <FaPlus></FaPlus> My List
                </button>
              </div>
              <p className="font-bold mt-12 lg:w-[40%] w-[100%] text-xl text-white mb-10">
                {movie?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
