const mongoose = require("mongoose");
const User = require("./models/user"); // import the User model

const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/myapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB Connected!!!");
    console.log(`Hostname: ${connect.connection.host}`);

    // Insert a new user into the database
    const newUser = new User({
      name: "Shell Doe",
      email: "doe@pragra.com",
      password: "#$%@&#*#(#jdndjdn#*37363&#^#",
    });

    await newUser.save();
    console.log("New user saved to the database");
  } catch (err) {
    console.log(err);
  }
};

connectDB();
