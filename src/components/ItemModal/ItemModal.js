import "./ItemModal.css";
import closeLight from "../../images/close1.svg";

const ItemModal = ({ selectedCard, onClose, onDeleteItem }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content modal__item">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeLight} />
        </button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__item-info">
          <div>
            <div className="modal__item-name">{selectedCard.name}</div>
            <div className="modal__item-type">
              Weather Type: {selectedCard.weather}
            </div>
          </div>
          <div>
            <button
              type="text"
              className="modal__item-delete"
              onClick={onDeleteItem}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
