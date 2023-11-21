import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content modal__item">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={require("../images/close1.svg").default} />
        </button>
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__item-name">{selectedCard.name}</div>
        <div className="modal__item-type">
          Weather Type: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
