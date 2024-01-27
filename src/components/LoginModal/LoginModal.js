import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

const LoginModal = ({ onClose, isOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
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
        history.push("/profile");
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
          type="text"
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
