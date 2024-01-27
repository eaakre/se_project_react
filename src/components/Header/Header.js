import "./Header.css";
import wtwrLogo from "../../images/logo.svg";
import avatarLogo from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import React from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ location, onCreateModal, onSignupModal, onSigninModal }) => {
  const value = React.useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__logo">
        <NavLink exact to="/">
          <div>
            <img src={wtwrLogo} alt="logo" />
          </div>
        </NavLink>
        <div className="header__date">
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {value.loggedIn ? (
          <>
            <button
              type="text"
              className="header__button"
              onClick={onCreateModal}
            >
              + Add Clothes
            </button>
            <NavLink to="/profile" className="header__link">
              <div className="header__name">{value.userData.name}</div>
            </NavLink>
            <NavLink to="/profile">
              <div>
                <img src={avatarLogo} alt="avatar-logo" />
              </div>
            </NavLink>{" "}
          </>
        ) : (
          <>
            <button
              type="text"
              className="header__button"
              onClick={onSignupModal}
            >
              Sign Up
            </button>
            <button
              type="text"
              className="header__button"
              onClick={onSigninModal}
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
