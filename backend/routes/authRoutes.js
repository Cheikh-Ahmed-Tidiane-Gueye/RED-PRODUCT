const express = require("express");
const router = express.Router();
const multer = require("multer");
const authController = require("../controllers/authController");

// Configuration de Multer pour gérer le téléchargement des images
const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "../images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/inscription", authController.inscriptionUtilisateurs);
router.post("/connexion", authController.connexionUtilisateurs);
router.post("/deconnexion", authController.deconnexionUtilisateurs);
router.post("/ajouthotel", upload.single("image"), authController.ajouthotel);
router.get("/hotels", authController.getHotels);

module.exports = router;