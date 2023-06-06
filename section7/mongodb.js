const mongoose = require("mongoose");
const User = require("./models/retail-customer"); // import the User model

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://127.0.0.1:27017/retail-shop",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Mongo DB Connected!!!");
    console.log(`Hostname: ${connect.connection.host}`);

    // Insert a new user into the database
    const newUser = new User({
      name: "Mike Doee",
      age: 21,
      email: "mikedoe@pragra.com",
    });

    await newUser.save();
    console.log("New user saved to the database");
  } catch (err) {
    console.log(err);
  }
};

connectDB();
