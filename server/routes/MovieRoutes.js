const express = require("express");
const tmdb = require("../api/tmdb");
const router = express.Router();

router.get("/trending", async (req, res) => {
  try {
    const response = await tmdb.get("/trending/movie/day");
    res.json(response.data.results);
  } catch (error) {
    console.error("error fetching trending movies", error.message);
    res.status(500).json({ error: "Failed to fetch trending movies" });
  }
});

router.get("/genre/list", async (req, res) => {
  try {
    const response = await tmdb.get("/genre/movie/list");
    res.json(response.genre);
  } catch (error) {
    console.error("error fetching gener lists", error.message);
    res.status(500).json({ error: "Failed to fetch gener lists" });
  }
});

router.get("/genre/:genreId", async (req, res) => {
  const genreId = req.params.genreId;
  try {
    const response = await tmdb.get("/discover/movie", {
      params: {
        with_genres: genreId,
      },
    });
    res.json(response.data.results);
  } catch (error) {
    console.error("Error fetching movies by genre:", error.message);
    res.status(500).json({ error: "Failed to fetch movies by genre!" });
  }
});

module.exports = router;
