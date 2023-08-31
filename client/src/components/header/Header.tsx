import React from "react";
import { GrMore } from "react-icons/gr";
import { BsBellFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="moreIcon">
        <GrMore />
      </div>

      <div className="subscribeDiv">
        <BsBellFill />
        <p>Subscribe</p>
      </div>
    </div>
  );
};

export default Header;
