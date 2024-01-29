// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes")
require("dotenv").config();

// Augmentez la limite de taille du corps de la requête
app.use(bodyParser.json({ limit: "10mb" })); // Augmentez ou diminuez la limite en fonction de vos besoins

const app = express();
app.use(express.json());

// Connexion à la base de donnée
mongoose.connect(process.env.MONGO_URI)
  .then((result) => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

app.use(cors());

app.use("/api", authRoutes);

const port = process.env.PORT || 5000;

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur a démarré au port ${port}`);
});
