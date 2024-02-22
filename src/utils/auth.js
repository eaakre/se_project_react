import processServerResponse from "./processServerResponse";

// export const BASE_URL = "http://localhost:3001";
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://wtwr.themoosebarn.com"
    : "http://localhost:3001";

export const register = (name, avatar, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then((res) => processServerResponse(res))
    .then((data) => {
      if (data) {
        return authorize(email, password);
      } else {
        throw Error("Something went wrong, please try again.");
      }
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => processServerResponse(res))
    .then((data) => {
      if (data.token) {
        return data;
      } else {
        throw Error("Something went wrong, please try again.");
      }
    });
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => processServerResponse(res))
    .then((data) => data);
};

export const updateUser = (name, avatar) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.jwt}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then((res) => processServerResponse(res));
};
