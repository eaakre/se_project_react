import processServerResponse from "./processServerResponse";

const baseUrl = "http://localhost:3001";

function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}

export const getClothingItems = () => {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addClothingItems = ({ name, imageUrl, weather }) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.jwt}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
};

export const deleteClothingItems = (id) => {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.jwt}`,
    },
  });
};

export const addCardLike = (id, token) => {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const removeCardLike = (id) => {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.jwt}`,
    },
  });
};
