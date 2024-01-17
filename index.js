require("dotenv").config();
const express = require("express");
const cors = require("cors");
const videosRoute = require("./routes/videos");
const app = express();
const { PORT } = process.env;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("images"));

//Use the videosRout for handling video-related routes
app.use("/videos", videosRoute);

app.listen(PORT, () => {
  console.log(`The server has started on ${PORT}`);
});
