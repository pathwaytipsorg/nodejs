const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const jwt = require("jsonwebtoken");
const app = express();

// create a new instance of an Express.js router
const router = express.Router();

// Get a secret key from the token team
const client_secret = "abc-store-api";

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users", async (req, res) => {
  // Get the token from the request headers
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(401).send("Need token");
  }
  const token = tokenHeader.split(" ")[1];
  // console.log("token", token);
  
  // Verify the token using the verify() method
  jwt.verify(token, client_secret, async (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token");
    }

    // If the token is valid, return the protected data
    try {
      const users = await User.find({});
      res.send(users);
    } catch (e) {
      res.status(500).send();
    }
  });
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

// export the router so that it can be used in other files
module.exports = router;
