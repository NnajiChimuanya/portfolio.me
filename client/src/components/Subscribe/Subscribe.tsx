import React, { useContext } from "react";
import { PortfolioContext } from "../../context/Context";

const Subscribe = () => {
  const { state, dispatch } = useContext(PortfolioContext);

  const handleShowSubscribeModal = () => {
    dispatch({ type: "SET_SUBSCRIBEOPTION", payload: !state.subscribe });
  };

  return (
    <div onClick={handleShowSubscribeModal} className="subscribeModalContainer">
      <div className="subscribeModal">Subscribe</div>
    </div>
  );
};

export default Subscribe;
