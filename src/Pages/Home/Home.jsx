import React, { useState } from "react";
import { HomeHeader } from "../../Components/Home/HomeHeader";
import { HomeBanner } from "../../Components/Home/HomeBanner";
import Row from "../../Components/Home/Row";
import requests from "../../requests";
import { Footer } from "../../Components/Home/Footer";
function Home() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <HomeBanner></HomeBanner>
      <div className="mt-10">
        <Row title={"Originals"} requestUrl={requests.requestOriginals}></Row>
        <Row
          title={"Science Fiction"}
          requestUrl={requests.requestScienceFiction}
        ></Row>
        <Row title={"Mystery"} requestUrl={requests.requestUMystery}></Row>
        <Row title={"Fantasy"} requestUrl={requests.requestFantasy}></Row>
        <Row title={"Upcoming"} requestUrl={requests.requestUpcoming}></Row>
        <Row title={"Popular"} requestUrl={requests.requestPopular}></Row>
        <Row title={"Trending"} requestUrl={requests.requestTrending}></Row>
        <Row title={"Top Rated"} requestUrl={requests.requestTopRated}></Row>
        <Row title={"Horror"} requestUrl={requests.requestHorror}></Row>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
