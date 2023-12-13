import "./Header.css";
import wtwrLogo from "../../images/logo.svg";
import avatarLogo from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ location, onCreateModal }) => {
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
        <button type="text" className="header__button" onClick={onCreateModal}>
          + Add Clothes
        </button>
        <NavLink to="/profile" className="header__link">
          <div className="header__name">Erik Aakre</div>
        </NavLink>
        <NavLink to="/profile">
          <div>
            <img src={avatarLogo} alt="avatar-logo" />
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
