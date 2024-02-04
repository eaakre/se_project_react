import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import currentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import {
  getForcastWeather,
  parseWeatherCity,
  parseWeatherData,
} from "../../utils/weatherApi";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";
import * as api from "../../utils/api";
import {
  getClothingItems,
  addClothingItems,
  deleteClothingItems,
} from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleSignupModal = () => {
    setActiveModal("signup");
  };

  const handleSigninModal = () => {
    setActiveModal("signin");
  };

  const handleEditProfileModal = () => {
    setActiveModal("profile");
  };

  const handlePreviewModal = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleRegister = (name, avatar, email, password) => {
    return auth.register(name, avatar, email, password).then(() => {
      handleLogin(email, password);
      handleCloseModal();
    });
  };

  const handleLogin = (email, password) => {
    return auth
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
      })
      .then(() => {
        checkToken();
        handleCloseModal();
      });
  };

  const handleUpdateUser = (name, avatar) => {
    return auth.updateUser(name, avatar).then(() => {
      checkToken();
      handleCloseModal();
    });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setUserData({});
  };

  const checkToken = () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    auth.getContent(jwt).then((userData) => {
      if (!userData) {
        throw Error("Invalid JWT");
      } else {
        setLoggedIn(true);
        setUserData({
          name: userData.data.name,
          email: userData.data.email,
          avatar: userData.data.avatar,
          _id: userData.data._id,
        });
      }
    });
  };

  const handleAddItem = ({ name, imageUrl, weather }) => {
    addClothingItems({ name, imageUrl, weather })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteItem = () => {
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

  const handleCardLike = (id, isLiked) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  useEffect(() => {
    checkToken();
  }, []);

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
      <CurrentUserContext.Provider
        value={{
          loggedIn,
          userData,
        }}
      >
        <div className="app">
          <Header
            location={city}
            onCreateModal={handleCreateModal}
            onSignupModal={handleSignupModal}
            onSigninModal={handleSigninModal}
            loggedIn={loggedIn}
            checkToken={checkToken}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                clothingItems={clothingItems}
                onSelectCard={handlePreviewModal}
                onCardLike={handleCardLike}
              />
            </Route>
            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
              <Profile
                onSelectCard={handlePreviewModal}
                onCreateModal={handleCreateModal}
                onEditProfileModal={handleEditProfileModal}
                onSignOut={handleSignOut}
                onCardLike={handleCardLike}
                clothingItems={clothingItems}
              />
            </ProtectedRoute>
          </Switch>

          <Footer />

          {activeModal === "create" && (
            <AddItemModal
              onClose={handleCloseModal}
              onAddItem={handleAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDeleteItem={handleDeleteItem}
            />
          )}
          {activeModal === "signup" && (
            <RegisterModal
              onClose={handleCloseModal}
              onSigninModal={handleSigninModal}
              handleRegister={handleRegister}
            />
          )}
          {activeModal === "signin" && (
            <LoginModal
              onClose={handleCloseModal}
              onSignupModal={handleSignupModal}
              handleLogin={handleLogin}
            />
          )}
          {activeModal === "profile" && (
            <EditProfileModal
              onClose={handleCloseModal}
              handleUpdateUser={handleUpdateUser}
            />
          )}
        </div>
      </CurrentUserContext.Provider>
    </currentTemperatureUnitContext.Provider>
  );
}

export default App;
