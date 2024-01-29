import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const SERVER_URL = "https://red-product-tzz8.onrender.com/api";

// Logique ajout cartes d'hotels
export const LogiqueAjoutCartesHotel = ({ onAddHotel }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formDataAjoutCartesHotel, setFormDataAjoutCartesHotel] = useState({
    src: "",
    nom: "",
    adresse: "",
    email: "",
    number: "",
    prix: "",
    devise: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Afficher les données dans la console
      console.log(
        "Données saisies lors de la soumission :",
        formDataAjoutCartesHotel
      );

      // Appelez votre API pour ajouter l'hôtel à la base de données
      await axios.post(SERVER_URL + "/ajouthotel", formDataAjoutCartesHotel);

      toast.success("Hotel ajouter avec success");

      onAddHotel(formDataAjoutCartesHotel);

      // Réinitialiser le formulaire
      setFormDataAjoutCartesHotel({
        src: "",
        nom: "",
        adresse: "",
        email: "",
        number: "",
        prix: "",
        devise: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur s'est produite lors de l'ajout de l'hôtel.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formDataAjoutCartesHotel,
    setFormDataAjoutCartesHotel,
    handleSubmit,
    isLoading,
  };
};
