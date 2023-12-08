import { HomeHeader } from "../../Components/Home/HomeHeader";
import { HomeBanner } from "../../Components/Home/HomeBanner";
import Row from "../../Components/Home/Row";
import requests from "../../requests";
import { Footer } from "../../Components/Home/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
function Home() {
  const [movies, setMovies] = useState([]);
  let movie;
  if (movies) {
    movie = movies[Math.floor(Math.random() * movies.length)];
  }
  const requestUri = requests.filter(
    (request) => request.title === "Popular"
  )[0].requestURI;
  console.log(requestUri);
  useEffect(() => {
    axios
      .get(requestUri)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <HomeHeader></HomeHeader>
      <HomeBanner movie={movie}></HomeBanner>
      <div className="mt-20 mb-30">
        {requests.map((request) => (
          <Row title={request.title} requestUrl={request.requestURI}></Row>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
