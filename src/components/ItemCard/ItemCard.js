import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card">
        <img
          src={item.link}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
        <div className="card__name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;
