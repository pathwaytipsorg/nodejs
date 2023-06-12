const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true, // Ensure uniqueness
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postive number");
      }
    },
  },
});

userSchema.index({ userId: 1 }, { unique: true }); // Add unique index

const User = mongoose.model("User", userSchema);

module.exports = User;
