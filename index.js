const express = require("express");
const cors = require("cors");
const app = express();

app.use(cor);
app.use(express.json());
app.use(express.static("images"));
app.use("/videos", Routes);

// GET endpoint to retrieve all videos
app.get("/videos", (req, res) => {
  res.json(videos);
});

//GET endpoint to retrieve all videos
app.get("/videos/:id", (req, res) => {
  res.send(videos);
});

//POST endpoint to add a new video
app.post("/videos", (req, res) => {
  res.send("You hit th post endpoint!");
});

const PORT = 8080;

app.listen(8080, () => {
  console.log("Pulled the rip cord, the server has started on port 8080");
});
