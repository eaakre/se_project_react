import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";

const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
      />
    </div>
  );
};
export default Profile;
