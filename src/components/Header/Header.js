import "./Header.css";
import wtwrLogo from "../../images/logo.svg";
import avatarLogo from "../../images/avatar.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ location, onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={wtwrLogo} alt="logo" />
        </div>
        <div className="header__date">
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <button type="text" className="header__button" onClick={onCreateModal}>
          + Add Clothes
        </button>
        <div className="header__name">Erik Aakre</div>
        <div>
          <img src={avatarLogo} alt="avatar-logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
