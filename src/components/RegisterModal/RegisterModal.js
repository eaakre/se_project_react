import "./RegisterModal.css";
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

const RegisterModal = ({ onClose, handleRegister, onSigninModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(name, avatar, email, password)
      .then(() => {
        setMessage("");
      })
      .catch((err) => {
        setMessage(err.message || "Something went wrong");
        console.log(err.message);
      });
  };
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Next"
      name="garment"
      onClose={onClose}
      onSubmit={handleSubmit}
      altLink={true}
      altLinkHandler={onSigninModal}
      altLinkText="or Sign In"
    >
      <label className="modal__label">
        Email*
        <input
          type="text"
          className="modal__input"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          minLength="2"
          maxLength="30"
          placeholder="Email"
        />
      </label>
      <label className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </label>
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
          placeholder="Name"
        />
      </label>
      <label className="modal__label">
        Avatar URL*
        <input
          type="url"
          className="modal__input"
          name="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="Avatar URL"
        />
      </label>
    </ModalWithForm>
  );
};

export default withRouter(RegisterModal);
