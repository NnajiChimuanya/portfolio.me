import React, { useState, useContext } from "react";
import { GrMore } from "react-icons/gr";
import { BsBellFill } from "react-icons/bs";
import { PortfolioContext } from "../../context/Context";

const Header = () => {
  const { state, dispatch } = useContext(PortfolioContext);

  const handleShowMore = () => {
    dispatch({ type: "SET_MOREOPTIONS", payload: !state.moreOptions });
    console.log(state.moreOptions);
  };

  return (
    <div className="header">
      <div className="moreIcon">
        <GrMore onClick={handleShowMore} />
      </div>

      <div className="subscribeDiv">
        <BsBellFill />
        <p>Subscribe</p>
      </div>
    </div>
  );
};

export default Header;
