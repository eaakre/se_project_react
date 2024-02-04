import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

const LoginModal = ({ onClose, isOpen, onSignupModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const value = React.useContext(CurrentUserContext);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return setMessage("Please enter a valid email and password.");
    }
    value
      .handleLogin(email, password)
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
      title="Log In"
      buttonText="Log in"
      name="garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      altLink={true}
      altLinkHandler={onSignupModal}
      altLinkText="or Sign Up"
    >
      <label className="modal__label">
        Email
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
        Password
        <input
          type="password"
          className="modal__input"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
