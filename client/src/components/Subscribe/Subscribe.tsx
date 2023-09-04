import React, { useContext } from "react";
import { PortfolioContext } from "../../context/Context";
import { AiOutlineClose } from "react-icons/ai";

const Subscribe = () => {
  const { state, dispatch } = useContext(PortfolioContext);

  const handleShowSubscribeModal = () => {
    dispatch({ type: "SET_SUBSCRIBEOPTION", payload: !state.subscribe });
  };

  return (
    <div className="subscribeModalContainer">
      <div
        className="subscribeModalOverlay"
        onClick={handleShowSubscribeModal}
      ></div>
      <div className="subscribeModal">
        <div className="close">
          <AiOutlineClose
            className="closeIcon"
            onClick={handleShowSubscribeModal}
          />
        </div>

        <div className="section1">
          <img src="me.jpg" className="subscribeImage" alt="Muanya" />
          <h4>Subscribe to Nnaji Chimuanya</h4>
          <p>Stay up to date with everything important</p>
          <input type={"text"} placeholder="Email" />

          <label>
            <input type={"checkbox"} /> I agree
          </label>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
