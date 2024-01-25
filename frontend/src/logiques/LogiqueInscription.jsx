// LogiqueInscription.jsx
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export const LogiqueInscription = (data) => {
  
  const SERVER_URL = "http://localhost:5000/api/inscription";
  axios.post(SERVER_URL, formDataInscription, data);
  
  const [formDataInscription, setFormDataInscription] = useState({
    nom: "",
    email: "",
    password: "",
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Affichez la notification personnalisée avec une durée de 5 secondes
    toast("Inscription réussit !", {
      icon: "👏",
      duration: 5000,
      // position: "top",
      style: { background: "white", color: "black" },
    });

    // Réinitialise les valeurs des champs après une inscription réussie
    setFormDataInscription({
      nom: "",
      email: "",
      password: "",
    });
  };

  return {
    formDataInscription,
    setFormDataInscription,
    handleSubmit
  };
};
