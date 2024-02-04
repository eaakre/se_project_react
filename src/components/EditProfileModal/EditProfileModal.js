import React, { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ onClose, handleUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(`${currentUser.userData.name}`);
  const [avatar, setAvatar] = useState(`${currentUser.userData.avatar}`);
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName(`${currentUser.userData.name}`);
    setAvatar(`${currentUser.userData.avatar}`);
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return setMessage("Please enter a name.");
    }
    handleUpdateUser(name, avatar)
      .then(() => {
        resetForm();
      })
      .catch((err) => {
        setMessage(err.message || "Something went wrong.");
        console.log(err);
      });
  };
  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save Changes"
      name="profile"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name*
        <input
          type="text"
          className="modal__input"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength="2"
          maxLength="30"
          placeholder={currentUser.userData.name}
        />
      </label>
      <label className="modal__label">
        Avatar
        <input
          type="text"
          className="modal__input"
          name="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder={currentUser.userData.avatar}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
