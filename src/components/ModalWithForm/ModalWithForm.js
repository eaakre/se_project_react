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
  altLink,
  altLinkHandler,
  altLinkText,
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
          <div className="modal__submit-wrapper">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            {altLink && (
              <button
                type="button"
                className="modal__link"
                onClick={altLinkHandler}
              >
                {altLinkText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
