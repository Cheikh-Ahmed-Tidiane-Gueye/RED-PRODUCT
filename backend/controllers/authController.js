const utilisateurs = require("../models/utilisateurs");
// const hotels = require("../models/hotels")
const hotelsModel = require("../models/hotels");
const jwt = require("jsonwebtoken");
const multer = require("multer");
require("dotenv").config();


const secretKey = process.env.JWT_SECRET;

// Fonction inscription
async function inscriptionUtilisateurs(req, res) {
  let { nom, email, password } = req.body;
  try {
    const duplicate = await utilisateurs.findOne({ email });
    if (duplicate) {
      return res.status(400).send({
        message:
          "Cet e-mail est déjà associé à un compte. Veuillez vous connecter ou utiliser un autre e-mail.",
      });
    }
    let newUtilisateur = new utilisateurs({ nom, email, password });
    const result = await newUtilisateur.save();
    console.log(result);
    res.status(201).send({ message: "Utilisateur inscrit avec succès" });
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
        error: "Connexion échouée !",
      });
    }
    const isPasswordValid = await utilisateur.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).send({
        error: "Le mot de passe ne correspond pas !",
      });
    }
    let token = jwt.sign(
      {
        utilisateursId: utilisateur?._id,
      },
      secretKey,
      {
        expiresIn: "24h",
      }
    );
    let finalData = {
      utilisateursId: utilisateur?._id,
      nom: utilisateur?.nom,
      email: utilisateur?.email,
      password: utilisateur?.password,
      token,
    };
    res.send(finalData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}


// Fonction de déconnexion
async function deconnexionUtilisateurs(req, res) {

  try {
    res.status(200).send({ message: "Déconnexion réussie" });
    console.log(res);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}


// Fonction d'ajout d'hotel
async function ajouthotel(req, res) {
  try {
    // Récupérer les données du formulaire
    const { src, nom, adresse, email, number, prix, devise } = req.body;

    // Vérifier que toutes les données requises sont saisies
    if (!src || !nom || !adresse || !email || !number || !prix || !devise) {
      return res
        .status(400)
        .send({ message: "Veuillez remplir tous les champs" });
    }

    // Créer un nouvel objet hôtel avec les données du formulaire
    const newHotel = new hotelsModel({
      src,
      nom,
      adresse,
      email,
      number,
      prix,
      devise,
    });

    // Enregistrer l'hôtel dans la base de données
    const result = await newHotel.save();

    // Afficher les informations ajoutées sur la console
    console.log("Informations de l'hôtel ajouté :", result);

    // Envoyer une réponse réussie
    res.status(201).send({ message: "Hôtel ajouté avec succès", data: result });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
}


// Recuperation données hotel
async function getHotels(req, res) {
  try {
    const hotels = await hotelsModel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}


const authController = {
  inscriptionUtilisateurs,
  connexionUtilisateurs,
  deconnexionUtilisateurs,
  ajouthotel,
  getHotels,
};

module.exports = authController;
