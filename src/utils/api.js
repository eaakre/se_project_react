import { processServerResponse } from "./weatherApi";

const baseUrl = "http://localhost:3001";

export const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => processServerResponse(res));
};

export const addClothingItems = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => processServerResponse(res));
};

export const deleteClothingItems = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => processServerResponse(res));
};
