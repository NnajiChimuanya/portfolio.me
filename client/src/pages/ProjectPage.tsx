import React, { useContext } from "react";
import Header from "../components/header/Header";
import Background from "../components/Background/Background";
import Subscribe from "../components/Subscribe/Subscribe";
import { PortfolioContext } from "../context/Context";

const Project = () => {
  const { state } = useContext(PortfolioContext);

  return (
    <div className="projectPage">
      <Background />
      <Header />
      {state.subscribe ? <Subscribe /> : null}
    </div>
  );
};

export default Project;
