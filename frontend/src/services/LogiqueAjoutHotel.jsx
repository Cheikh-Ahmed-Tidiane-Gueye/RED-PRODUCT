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

    try {
      setIsLoading(true);

      // Utilisez formDataAjoutCartesHotel pour créer un nouvel objet hôtel
      const newHotel = {
        src: formDataAjoutCartesHotel.src,
        nom: formDataAjoutCartesHotel.nom,
        adresse: formDataAjoutCartesHotel.adresse,
        email: formDataAjoutCartesHotel.email,
        number: formDataAjoutCartesHotel.number,
        prix: formDataAjoutCartesHotel.prix,
        devise: formDataAjoutCartesHotel.devise,
      };

      // Appelez votre API pour ajouter l'hôtel à la base de données
      const response = await axios.post(SERVER_URL + "/ajouthotel", newHotel);

      // Vérifiez la réponse
      if (response.data && response.data.message) {
        toast.success(response.data.message);
        // Appeler la fonction de callback pour ajouter le nouvel hôtel à la liste
        onAddHotel(newHotel);

        // Appeler la route pour récupérer les données mises à jour
        const response = await axios.get(SERVER_URL + "/hotels");
        if (response.data) {
          // Mettez à jour la liste des hôtels avec les nouvelles données
          setHotelList(response.data);
        }

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
      } else {
        toast.error("Une erreur s'est produite lors de l'ajout de l'hôtel.");
      }
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