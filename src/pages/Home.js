import React from "react";
import HomeButons from "../components/Buttons/HomeButtons";
import Header from "../components/Header/index";
import TitleHome from "../components/Titles/Title_home";
import "../styles/index.css";

function Home() {
  return (
    <>
      <Header />
      <TitleHome />
      <HomeButons />
    </>
  );
}

export default Home;
