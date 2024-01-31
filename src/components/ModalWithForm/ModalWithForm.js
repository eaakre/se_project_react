import "./ModalWithForm.css";
import closeDark from "../../images/close.svg";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  linkText,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content modal__form">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeDark} alt="Close modal button" />
        </button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
          {/* <button
            type="link"
            className="sidebar__button"
            onClick={onEditProfileModal}
          >
            {linkText}
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
