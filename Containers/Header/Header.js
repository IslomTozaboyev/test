import React from "react";
import HeaderWrapper from "./HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <header className="d-flex justify-content-between align-items-center">
        <div>
          <img className="pointer" src="ppp.png" alt="pointer" />
        </div>
        <div className="d-flex align-items-center">
          <img className="iconButton" src="iconButton.png" alt="iconButton" />
          <img
            className="emailButton"
            src="emailButton.png"
            alt="emailButton"
          />
          <img className="bell" src="bell.png" alt="bell" />
          <div className="d-flex align-items-center circleUser">
            <img className="circle" src="user.png" alt="user" />
            <img className="litteUser" src="litteUser.png" alt="litteUser" />
            <p className="name">
              Asadbek <br /> Bektayev
            </p>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
};

export default Header;
