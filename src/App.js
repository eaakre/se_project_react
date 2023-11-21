import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal/ItemModal";
import {
  getForcastWeather,
  parseWeatherCity,
  parseWeatherData,
} from "./utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handlePreviewModal = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  useEffect(() => {
    getForcastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      const location = parseWeatherCity(data);
      setTemp(temperature);
      setCity(location);
    });
  });

  return (
    <div className="app">
      <Header location={city} onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handlePreviewModal} />
      <Footer />

      {activeModal === "create" && (
        <ModalWithForm
          title="New Garment"
          name="garment"
          onClose={handleCloseModal}
        >
          <label className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              name="name"
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
              name="link"
              placeholder="Image URL"
            />
          </label>
          <p className="modal__radio-label">Select the weather type:</p>
          <div>
            <div>
              <input
                type="radio"
                className="modal__radio"
                id="hot"
                value="hot"
              />
              <label>Hot</label>
            </div>
            <div>
              <input
                type="radio"
                className="modal__radio"
                id="warm"
                value="warm"
              />
              <label>Warm</label>
            </div>
            <div>
              <input
                type="radio"
                className="modal__radio"
                id="cold"
                value="cold"
              />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
