import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const SERVER_URL = "https://red-product-tzz8.onrender.com/api";

// Logique ajout cartes d'hotels
export const LogiqueAjoutCartesHotel = ({ onAddHotel }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
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
      // Envoi de la requête POST avec les données du formulaire
      const response = await axios.post(SERVER_URL + "/ajouthotel", formData);

      // Si la requête est réussie, on appelle la fonction onAddHotel avec le nouvel hôtel ajouté
      if (response.data && response.data.hotel) {
        onAddHotel(response.data.hotel);
        toast.success("Hôtel ajouté avec succès");
        setFormData({
          image: "",
          nom: "",
          adresse: "",
          email: "",
          number: "",
          prix: "",
          devise: "",
        });
      } else {
        toast.error("Erreur lors de l'ajout de l'hôtel");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la requête d'ajout d'hôtel");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    isLoading,
  };
};

