import { useContext } from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

const Profile = ({ onSelectCard, onCreateModal, onSignOut, clothingItems }) => {
  const value = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <Sidebar
        user={value.userData.name}
        onSignOut={onSignOut}
        onCreateModal={onCreateModal}
      />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        onSignOut={onSignOut}
        clothingItems={clothingItems}
      />
    </div>
  );
};
export default Profile;
