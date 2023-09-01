import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Background from "../components/Background/Background";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>{"Nnaji Chimuanya"}</title>
        <meta
          name="Nnaji Chimuanya"
          content={
            "A Full Stack Developer and Backend Specialist with a passion for crafting real-world solutions."
          }
        />

        <meta property="og:title" content={"Nnaji Chimuanya"} />
        <meta
          property="og:description"
          content={
            "A Full Stack Developer and Backend Specialist with a passion for crafting real-world solutions."
          }
        />
        <meta property="og:image" content={"%PUBLIC_URL%/me.jpg"} />
        <meta property="og:url" content={"/"} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={"Nnaji Chimuanya"} />
        <meta
          name="twitter:description"
          content="A Full Stack Developer and Backend Specialist with a passion for crafting real-world solutions."
        />
        <meta name="twitter:image" content={"%PUBLIC_URL%/me.jpg"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Background />

      <Header />

      <div className="homePageContent">
        <img className="image" src="me.jpg" alt="Nnaji Chimuanya" />

        <div className="socialMediaIcons">
          <a style={{ color: "white" }} href="#">
            <AiFillGithub className="socialMediaIcon" />
          </a>

          <a style={{ color: "white" }} href="#">
            <AiFillLinkedin className="socialMediaIcon" />
          </a>

          <a href="#" style={{ color: "white" }}>
            <AiFillTwitterCircle className="socialMediaIcon" />
          </a>

          <a href="#" style={{ color: "white" }}>
            <SiHashnode className="socialMediaIcon" />
          </a>
        </div>

        <div className="text">
          <h4>Hi, 🖐🏽 I'm</h4>
          <h3>Nnaji Chimuanya</h3>
          <h5>
            I'm<span> Full Stack Developer</span> with{" "}
            <span>Backend Specialisation</span> with a passion for
            problem-solving, crafting real-world solutions and strong foundation
            in computer science skills. My expertise lies in designing and
            developing scalable, high-performance applications using TypeScript,
            Java and Python.
          </h5>
        </div>

        <Link to={"/project"} className="exploreButton">
          Explore &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Home;
