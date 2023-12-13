import avatarLogo from "../../images/avatar.svg";
import "./Sidebar.css";

const Sidebar = ({ onSelectCard }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__avatar-logo">
        <img src={avatarLogo} alt="profile avatar" className="sidebar__logo" />
        <div className="sidebar__name">Erik Aakre</div>
      </div>
    </div>
  );
};
export default Sidebar;
