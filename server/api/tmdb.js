const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const tmdb = axios.create({
  base_url: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.TMDB_API_KEY,
    language: "en-us",
  },
});

module.exports = tmdb;
