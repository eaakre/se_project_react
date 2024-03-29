import avatarLogo from "../../images/avatar.svg";
import "./SideBar.css";

const SideBar = ({ user, onSignOut, onEditProfileModal }) => {
  const userAvatar = `${!user.avatar ? avatarLogo : user.avatar}`;

  return (
    <div className="sidebar">
      <div className="sidebar__avatar-logo">
        <img src={userAvatar} alt="profile avatar" className="sidebar__logo" />
        <div className="sidebar__name">{user.name}</div>
      </div>
      <div className="sidebar__user-actions">
        <button
          type="text"
          className="sidebar__button"
          onClick={onEditProfileModal}
        >
          Change User Data
        </button>
        <button type="text" className="sidebar__button" onClick={onSignOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};
export default SideBar;
