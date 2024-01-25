const mongoose = require("mongoose");

// Schéma des hotels dans la base de données MongoDB
const hotelsSchema = mongoose.Schema({
  nomHotel: String,
  adresseHotel: String,
  email: String,
});

const hotelsModel = mongoose.model("hotels", hotelsSchema);
module.exports = hotelsModel;
