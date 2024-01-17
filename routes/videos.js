const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
// const videoList = require("../data/videos.json");

function readVideos() {
  const videosData = fs.readFileSync("./data/videos.json");
  const parsedVideos = JSON.parse(videosData);
  return parsedVideos;
}

function writeVideo(data) {
  const stringifiedVideo = JSON.stringify(data);
  fs.writeFileSync("./data/videos.json", stringifiedVideo);
}

router.get("/", (req, res) => {
  const parseData = readVideos();
  res.json(parseData);
});

router.get("/:id", (req, res) => {
  const videos = readVideos();
  const singleVideo = videos.find((video) => video.id === req.params.id);
  if (!singleVideo) {
    return res.status(404).send("Video was not found");
  }
  res.json(singleVideo);
});

router.post("/", (req, res) => {
  const videos = readVideos();
  console.log(req.body);
  const { title, description } = req.body;

  const newVideo = {
    id: uuidv4(),
    title,
    description,
  };
  videos.push(newVideo);
  fs.writeFileSync("./data/videos.json", JSON.stringify(videos));

  res.json(videos);
});

module.exports = router;
