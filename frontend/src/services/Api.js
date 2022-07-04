import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000",
});

export function register(email, password) {
  return Api.post(`/users/register`, {
    email,
    password,
  }).then((res) => res.data);
}

export function login(email, password) {
  return Api.post(
    `/users/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  ).then((res) => res.data);
}

export function getUsers() {
  return Api.get(`/users`, {
    withCredentials: true,
  }).then((res) => res.data);
}

export function logout() {
  return Api.get(`/users/logout`, {
    withCredentials: true,
  });
}
