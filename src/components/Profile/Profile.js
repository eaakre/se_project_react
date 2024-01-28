import { useContext } from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

const Profile = ({
  onSelectCard,
  onCreateModal,
  onEditProfileModal,
  onSignOut,
  clothingItems,
  jwt,
}) => {
  const currentUser = useContext(CurrentUserContext);

  // {
  //   clothingItems.map((item) => (
  //     <ItemCard item={item} key={item._id} onSelectCard={onSelectCard} />
  //   ));
  // }

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
        onSignOut={onSignOut}
        clothingItems={clothingItems}
      />
    </div>
  );
};
export default Profile;
