import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
// const SERVER_URL = "https://red-product-tzz8.onrender.com/api";
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
  // console.log(
  //   "Données saisies lors de la soumission :",
  //   formDataAjoutCartesHotel
  // );
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Afficher les données dans la console

      // Créer un objet FormData pour envoyer les données du formulaire
      const formData = new FormData();
      formData.append("src", formDataAjoutCartesHotel.src);
      formData.append("nom", formDataAjoutCartesHotel.nom);
      formData.append("adresse", formDataAjoutCartesHotel.adresse);
      formData.append("email", formDataAjoutCartesHotel.email);
      formData.append("number", formDataAjoutCartesHotel.number);
      formData.append("prix", formDataAjoutCartesHotel.prix);
      formData.append("devise", formDataAjoutCartesHotel.devise);

      // Appelez votre API pour ajouter l'hôtel à la base de données
      const response = await axios.post(
        SERVER_URL + "/ajouthotel",
        formDataAjoutCartesHotel
      );
      console.log(response.data);

      toast.success("Hotel ajouter avec success");

      onAddHotel(formDataAjoutCartesHotel);

      // Réinitialiser le formulaire
      setFormDataAjoutCartesHotel({
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
