const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB Connected!!!");
    console.log(`Hostname: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
