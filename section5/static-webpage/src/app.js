const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.send({
    wind: "10 KMPH",
    humidity: "65%",
    forecast: "Partly Sunny",
    location: "Toronto ON",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
