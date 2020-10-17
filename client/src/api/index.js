// import axios from "axios";
const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:3001/api"
});
export const getAllGuides = () => api.get("/guides");
export const searchGuideById = (id) =>
  api.get(
    `guides/:${id}`
  );
export const searchGuides = (country, lang, city, cost,comments) =>
  api.get(
    `search?${new URLSearchParams({ country, lang, city, cost,comments }).toString()}`
  );

const apis = { getAllGuides, searchGuides };

export default apis;

// ${country}/lang/${lang}/city/${city}/cost/${cost}





