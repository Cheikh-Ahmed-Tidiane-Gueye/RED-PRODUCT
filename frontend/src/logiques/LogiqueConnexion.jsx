// LogiqueConnexion.jsx
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LogiqueConnexion = () => {

  const navigate = useNavigate()
  const [formDataConnexion, setFormDataConnexion] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
     e.preventDefault();
     const SERVER_URL = "http://localhost:5000/api/connexion";
     axios
       .post(SERVER_URL, formDataConnexion)
       .then((result) => console.log(result))
       .catch((error) => console.log(error));
       
    // Affichez la notification personnalisée avec une durée de 5 secondes
    toast("connexion réussit !", {
      icon: "👏",
      duration: 5000,
      // position: "top",
      style: { background: "white", color: "black" },
    });

    // Réinitialise les valeurs des champs après une connexion réussie
    setFormDataConnexion({
      email: "",
      password: "",
    });
    // navigate("/accueil/dashboard");
  };

  return {
    formDataConnexion,
    setFormDataConnexion,
    handleSubmit,
  };
};