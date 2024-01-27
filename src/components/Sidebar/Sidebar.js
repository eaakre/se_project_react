import avatarLogo from "../../images/avatar.svg";
import "./Sidebar.css";

const Sidebar = ({ user, onSignOut, onCreateModal }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__avatar-logo">
        <img src={avatarLogo} alt="profile avatar" className="sidebar__logo" />
        <div className="sidebar__name">{user}</div>
      </div>
      <div className="sidebar__user-actions">
        <button type="text" className="sidebar__button" onClick={onCreateModal}>
          Change User Data
        </button>
        <button type="text" className="sidebar__button" onClick={onSignOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
