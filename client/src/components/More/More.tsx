import React, { useContext } from "react";
import { PortfolioContext } from "../../context/Context";

const More = () => {
  const { state, dispatch } = useContext(PortfolioContext);

  const handleShowMore = () => {
    dispatch({ type: "SET_MOREOPTIONS", payload: !state.moreOptions });
  };

  return (
    <div className="moreModalContainer">
      <div className="moreModalOverlay" onClick={handleShowMore}></div>
      <div className="moreModal">MMore</div>
    </div>
  );
};

export default More;
