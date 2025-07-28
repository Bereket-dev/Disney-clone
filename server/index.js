const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/MovieRoutes");

dotenv.config();

const port = process.env.PORT;
const apikey = process.env.TMDB_API_KEY;
const db = process.env.MONGO_URI;

const app = express();
app.use(cors);

//routes
app.use("/users", userRoutes);
app.use("/api/movies", movieRoutes);

mongoose
  .connect(db)
  .then(() => {
    console.log("mongodb connected successfully!");
  })
  .catch((err) => {
    console.log("mongodb connection failed: ", err);
  });

app.listen(port, () => console.log(`\nPort is running on ${port}`));
