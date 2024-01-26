// LogiqueInscription.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

export const LogiqueInscription = (data) => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formDataInscription, setFormDataInscription] = useState({
    nom: "",
    email: "",
    password: "",
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Regex pour vérifier la validité de l'e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !formDataInscription.nom ||
      !formDataInscription.email ||
      !formDataInscription.password
    ) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    // Vérification de la validité de l'e-mail
    if (!emailRegex.test(formDataInscription.email)) {
      toast.error("Veuillez entrer une adresse e-mail valide.");
      return;
    }
    
    setIsLoading(true);

    const SERVER_URL = "https://red-product-tzz8.onrender.com/api/inscription";
    try {
      let data = {
        formDataInscription,
      };

      const response = await axios.post(SERVER_URL, formDataInscription, data);

      console.log(response.data);

      localStorage.setItem("RedProduct", JSON.stringify(data));

      toast.success("Inscription reussie, vous pouvez vous connecter");

      setFormDataInscription({
        nom: "",
        email: "",
        password: "",
      });

      navigate("/");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Inscription échouée");
      console.error(error);
    }
  };

  return {
    formDataInscription,
    setFormDataInscription,
    handleSubmit,
    isLoading,
  };
};
