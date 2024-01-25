const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/inscription", authController.inscriptionUtilisateurs);
router.post("/connexion", authController.connexionUtilisateurs);

module.exports = router;