import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

const ClothesSection = ({
  onSelectCard,
  onCreateModal,
  onCardLike,
  clothingItems,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const userCards = clothingItems.filter((item) => {
    return item.owner === currentUser.userData._id;
  });

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button
          type="text"
          className="clothes-section__button"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <section className="card__section" id="card-section">
        <div className="card__items">
          {userCards.map((item) => (
            <ItemCard
              item={item}
              key={item._id}
              onSelectCard={onSelectCard}
              onCardLike={onCardLike}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default ClothesSection;
