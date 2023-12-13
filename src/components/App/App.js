import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import {
  getForcastWeather,
  parseWeatherCity,
  parseWeatherData,
} from "../../utils/weatherApi";
import currentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
// import { defaultClothingItems } from "../../utils/constants";
import {
  getClothingItems,
  addClothingItems,
  deleteClothingItems,
} from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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

  const onAddItem = ({ name, imageUrl, weather }) => {
    addClothingItems({ name, imageUrl, weather })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDeleteItem = () => {
    deleteClothingItems(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    }
    if (currentTemperatureUnit === "C") {
      setCurrentTemperatureUnit("F");
    }
  };

  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const location = parseWeatherCity(data);
        setTemp(temperature);
        setCity(location);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getClothingItems()
      .then((data) => {
        const items = data.sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
        setClothingItems(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <currentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="app">
        <Header location={city} onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              clothingItems={clothingItems}
              onSelectCard={handlePreviewModal}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectCard={handlePreviewModal}
              onCreateModal={handleCreateModal}
              clothingItems={clothingItems}
            />
          </Route>
        </Switch>

        <Footer />

        {activeModal === "create" && (
          <AddItemModal
            onClose={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDeleteItem={onDeleteItem}
          />
        )}
      </div>
    </currentTemperatureUnitContext.Provider>
  );
}

export default App;
