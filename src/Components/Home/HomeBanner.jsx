import requests from "../../requests";
import { BANNER_BASE_IMAGE_URL } from "../../data";
import { useState } from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";
export function HomeBanner({ movie }) {
  const [trailerVideoUrl, setTrailerVideoUrl] = useState("");
  // const movieTrailer = require("movie-trailer");
  console.log(trailerVideoUrl);
  console.log(movie);
  const bannerImage = BANNER_BASE_IMAGE_URL + movie?.backdrop_path;
  return (
    <>
      <div className="w-full h-[800px] pt-500 text-white">
        <div
          onMouseEnter={async () => {
            console.log("entered");
            movieTrailer(movie?.title, { videoType: "movie" }).then(
              (response) => {
                setTimeout(() => {
                  setTrailerVideoUrl(response);
                }, 1000);
              }
            );
          }}
          onMouseLeave={async () => {
            setTrailerVideoUrl(null);
          }}
          className="w-full h-full"
        >
          <div
            className={
              trailerVideoUrl
                ? "bg-gradient-to-b w-full h-[840px]  absolute  from-black/90 z-10"
                : "absolute w-full h-[800px] z-10 bg-gradient-to-tr  from-black"
            }
          ></div>

          <img
            className={
              trailerVideoUrl ? "hidden" : "h-full w-full object-cover -z-20"
            }
            src={bannerImage}
            alt={movie?.title}
          />
          <div
            className={
              trailerVideoUrl
                ? "h-[1000px] w-full absolute -top-32 -z-10 aspect-ratio-container"
                : "hidden"
            }
            style={{
              position: "relative",
              paddingBottom: "56.85%",
              /* 16:9 aspect ratio */
            }}
          >
            {trailerVideoUrl ? (
              <ReactPlayer
                playing={true}
                controls={false}
                loop={true}
                muted={true}
                width={"100%"}
                height={"100%"}
                style={{ position: "absolute", top: 0, left: 0 }}
                config={{
                  youtube: {
                    playerVars: { showinfo: 0 },
                  },
                }}
                url={trailerVideoUrl}
              />
            ) : (
              ""
            )}
          </div>
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
