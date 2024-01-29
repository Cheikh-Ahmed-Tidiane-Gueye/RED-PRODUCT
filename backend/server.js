// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes")
require("dotenv").config();

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

// Définir un tableau d'origines autorisées
const allowedOrigins = [
  "http://localhost:5173",
  "https://red-product.vercel.app",
];

// Utilisez la configuration CORS avec un tableau d'origines
const corsOptions = {
  origin: allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api", authRoutes);

const port = process.env.PORT || 5000;


// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur a démarré au port ${port}`);
});
