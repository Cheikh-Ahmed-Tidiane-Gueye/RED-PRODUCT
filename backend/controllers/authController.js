const utilisateurs = require("../models/utilisateurs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.JWT_SECRET;

// Fonction inscription
async function inscriptionUtilisateurs(req, res) {
  let { nom, email, password } = req.body;
  try {
    const duplicate = await utilisateurs.find({ email });
    if (duplicate && duplicate.length > 0) {
      return res.status(400).send({
        message: "Utilisateur déjà inscrit avec cette email",
      });
    }
    let newUtilisateur = new utilisateurs({ nom, email, password });
    const result = await newUtilisateur.save();
    console.log(result);
    res.status(201).send({ message: "Utilisateur inscrit avec succes" });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

// Fonction connexion
async function connexionUtilisateurs(req, res) {
  try {
    const { email, password } = req.body;
    const utilisateur = await utilisateurs.findOne({ email });
    if (!utilisateur) {
      return res.status(400).send({
        error: "connexion échouée!",
      });
    }
    const isPasswordValid = await utilisateur.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).send({
        error: "Le mot de passe ne correspond pas!",
      });
    }
    let token = jwt.sign(
      {
        utilisateursId: utilisateur?._id,
      },
      secretKey,
      {
        expiresIn: "1h",
      }
    );
    let finalData = {
      utilisateursId: utilisateur?._id,
      nom: utilisateur?.nom,
      email: utilisateur?.email,
      password: utilisateur?.password,
      token
    };
    res.send(finalData);
  } catch(error) {
    console.log(error);
    res.status(400).send(error);
  }
}

const authController = {
  inscriptionUtilisateurs,
  connexionUtilisateurs,
};

module.exports = authController;
