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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Vérifier que toutes les données requises sont saisies
      if (
        // !formDataAjoutCartesHotel.src ||
        !formDataAjoutCartesHotel.nom ||
        !formDataAjoutCartesHotel.adresse ||
        !formDataAjoutCartesHotel.email ||
        !formDataAjoutCartesHotel.number ||
        !formDataAjoutCartesHotel.prix ||
        !formDataAjoutCartesHotel.devise
      ) {
        toast.error("Veuillez remplir tous les champs");
        setIsLoading(false);
        return;
      }

      const formData = new FormData();
      // formData.append("src", formDataAjoutCartesHotel.src);
      formData.append("nom", formDataAjoutCartesHotel.nom);
      formData.append("adresse", formDataAjoutCartesHotel.adresse);
      formData.append("email", formDataAjoutCartesHotel.email);
      formData.append("number", formDataAjoutCartesHotel.number);
      formData.append("prix", formDataAjoutCartesHotel.prix);
      formData.append("devise", formDataAjoutCartesHotel.devise);

      const response = await axios.post(SERVER_URL + "/ajouthotel", formData);

      const data = response.data;

      console.log(data);
      toast.success("Hôtel ajouté avec succès");

      onAddHotel(formData);

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
