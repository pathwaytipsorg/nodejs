const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const envFilePath = path.resolve(__dirname, "../../.env");
// Determine the appropriate .env file based on the current environment
// const envFilePath = path.resolve(__dirname, `.env.${process.env.NODE_ENV}`);

// Load the environment variables from the .env file
dotenv.config({ path: envFilePath });

const dbProtocol = process.env.DB_PROTOCOL;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const dbConnectionString = `${dbProtocol}://${dbUsername}:${dbPassword}@${dbHost}/${dbName}`;

mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
