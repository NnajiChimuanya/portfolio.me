import React, { useState, useContext } from "react";
import { GrMore } from "react-icons/gr";
import { BsBellFill } from "react-icons/bs";
import { PortfolioContext } from "../../context/Context";

const Header = () => {
  const { state, dispatch } = useContext(PortfolioContext);

  const handleShowMore = () => {
    dispatch({ type: "SET_MOREOPTIONS", payload: !state.moreOptions });
  };

  const handleShowSubscribe = () => {
    dispatch({ type: "SET_SUBSCRIBEOPTION", payload: !state.subscribe });
    console.log(state.subscribe);
  };

  return (
    <div className="header">
      <div className="moreIcon" onClick={handleShowMore}>
        <GrMore />
      </div>

      <div className="subscribeDiv" onClick={handleShowSubscribe}>
        <BsBellFill />
        <p>Subscribe</p>
      </div>
    </div>
  );
};

export default Header;
