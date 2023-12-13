import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ onSelectCard, onCreateModal, clothingItems }) => {
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
          {clothingItems.map((item) => (
            <ItemCard item={item} key={item._id} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default ClothesSection;
