// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI)
    console.log("Mongo connecté");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
