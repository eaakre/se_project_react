import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ onClose, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };
  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add garment"
      name="garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          name="name"
          value={name}
          onChange={handleNameChange}
          minLength="1"
          maxLength="30"
          placeholder="Name"
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          name="imageUrl"
          value={imageUrl}
          onChange={handleLinkChange}
          placeholder="Image URL"
        />
      </label>
      <p className="modal__radio-label">Select the weather type:</p>
      <div>
        <div>
          <input
            type="radio"
            className="modal__radio"
            name="type"
            id="hot"
            onChange={handleWeatherChange}
            value="hot"
          />
          <label>Hot</label>
        </div>
        <div>
          <input
            type="radio"
            className="modal__radio"
            name="type"
            id="warm"
            onChange={handleWeatherChange}
            value="warm"
          />
          <label>Warm</label>
        </div>
        <div>
          <input
            type="radio"
            className="modal__radio"
            name="type"
            id="cold"
            onChange={handleWeatherChange}
            value="cold"
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
