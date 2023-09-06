import React from "react";
import HomeCards from "../components/HomeCards";
import Header from "../components/Header/index";
import TitleHome from "../components/Titles/Title_home";

function Home() {
  return (
    <>
      <Header />
      <TitleHome />
      <HomeCards />
    </>
  );
}

export default Home;
