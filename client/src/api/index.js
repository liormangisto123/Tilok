// import axios from "axios";
const axios = require("axios");

function generateFullUrl() {
  const domain =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_DOMAIN
      : "localhost:3001";
  const http = process.env.NODE_ENV === "production" ? "https" : "http";
  return `${http}://${domain}`;
}

const api = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:3001/api"
=======
  baseURL: generateFullUrl() + "/api",
>>>>>>> master
});
export const getAllGuides = () => api.get("/guides");
export const searchGuideById = (id) => api.get(`guides/:${id}`);
export const searchGuides = (country, lang, city, cost, comments) =>
  api.get(
    `search?${new URLSearchParams({
      country,
      lang,
      city,
      cost,
      comments,
    }).toString()}`
  );

const apis = { getAllGuides, searchGuides };

export default apis;

// ${country}/lang/${lang}/city/${city}/cost/${cost}





