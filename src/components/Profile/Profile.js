import { useContext } from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({
  onSelectCard,
  onCreateModal,
  onEditProfileModal,
  onCardLike,
  onSignOut,
  clothingItems,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <SideBar
        user={currentUser.userData}
        onSignOut={onSignOut}
        onEditProfileModal={onEditProfileModal}
      />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        onCardLike={onCardLike}
        onSignOut={onSignOut}
        clothingItems={clothingItems}
      />
    </div>
  );
};
export default Profile;
