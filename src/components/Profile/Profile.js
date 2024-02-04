import { useContext } from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

const Profile = ({
  onSelectCard,
  onCreateModal,
  onEditProfileModal,
  onCardLike,
  onSignOut,
  clothingItems,
  jwt,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <Sidebar
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
