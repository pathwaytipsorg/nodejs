const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

// create a new instance of an Express.js router
const router = express.Router();

// Get a secret key from the token team
const client_secret = "abc-store-api";

// Token validation middleware
const authenticateToken = (req, res, next) => {
  // Get the token from the request headers
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(401).send("Need token");
  }
  const token = tokenHeader.split(" ")[1];

  // Verify the token using the verify() method
  jwt.verify(token, client_secret, async (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token");
    }

    // Store the decoded token or user information in the request object if needed
    req.user = decoded;

    next(); // Proceed to the next middleware or route handler
  });
};

//To submit data to the server to create a new resource.
router.post("/users", authenticateToken, async (req, res) => {
  let { userId, name, age } = req.body;

  if (!userId) {
    // Generate a unique UUID for the userId
    userId = uuidv4();
  }

  try {
    const existingUser = await User.findOne({ userId });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = new User({ userId, name, age });

    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

/*This format is commonly used when you want to pass additional parameters or filter criteria along with the request. 
  It allows flexibility in adding multiple query parameters, and the order of the parameters doesn't matter. (?id=value)*/
router.get("/users", authenticateToken, async (req, res) => {
  const { id, name, age } = req.query;

  try {
    let users;
    if (id) {
      users = await getUserById(id);
      if (users.length === 0) {
        return res.status(404).json({ error: "Invalid user ID" });
      }
    } else {
      users = await getUsersByNameAndAge(name, age);
    }

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.send(users);
  } catch (e) {
    if (e.message === "User not found" || e.message === "Invalid user ID") {
      return res.status(404).json({ error: e.message });
    } else if (e.message === "InvalidIdError") {
      return res.status(400).json({ error: e.message });
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

async function getUserById(id) {
  const user = await User.findById(id);
  if (!user || user === null) {
    throw new Error("User not found");
  }
  return user;
}

async function getUsersByNameAndAge(name, age) {
  const filter = {};
  if (name) {
    filter.name = name;
  }

  if (age) {
    filter.age = age;
  }

  const users = await User.find(filter).select("id userId name age");
  return users;
}

//To retrieve a specific resource by its identifier in a more RESTful manner. (/users/userId)
router.get("/users/:userId", authenticateToken, async (req, res) => {
  const _userId = req.params.userId;

  try {
    const user = await User.findOne({ userId: _userId }).select("-_id -__v");

    if (!user || user === null) {
      return res.status(404).json({ error: "User not found" });
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

// export the router so that it can be used in other files
module.exports = router;
