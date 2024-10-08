/** @format */

import axios from "axios";

const token = localStorage.getItem("token");

export const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-Type": "application/json",
    token: token ? token : "",
  },
});
