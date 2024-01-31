import { useContext } from "react";
import "./ItemModal.css";
import closeLight from "../../images/close1.svg";
// import closeDark from "../../images/close.svg";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onDeleteItem }) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser.userData._id;

  const itemDeleteButtonClassName = `modal__item-delete ${
    isOwn ? "modal__item-delete_visible" : "modal__item-delete_hidden"
  }`;
  return (
    <div className={`modal`}>
      <div className="modal__content modal__item">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeLight} alt="Close modal button" />
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
              className={itemDeleteButtonClassName}
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
