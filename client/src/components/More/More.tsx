import React, { useContext } from "react";
import { PortfolioContext } from "../../context/Context";

const More = () => {
  const { state, dispatch } = useContext(PortfolioContext);

  const handleShowMore = () => {
    dispatch({ type: "SET_MOREOPTIONS", payload: !state.moreOptions });
    console.log(state.moreOptions);
  };

  return (
    <div onClick={handleShowMore} className="moreModalContainer">
      <div className="moreModal"></div>
    </div>
  );
};

export default More;
