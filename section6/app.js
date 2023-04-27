const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB();

app.listen(4000, () => {
  console.log("Server is up on port 4000.");
});
