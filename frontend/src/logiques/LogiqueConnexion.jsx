// LogiqueConnexion.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const LogiqueConnexion = (data) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formDataConnexion, setFormDataConnexion] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formDataConnexion.email || !formDataConnexion.password) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    setIsLoading(true);

    const SERVER_URL = "https://red-product-tzz8.onrender.com/api/connexion";

    try {
      let data = {
        formDataConnexion,
      };

      const response = await axios.post(SERVER_URL, formDataConnexion, data);

      console.log(response.data);

      localStorage.setItem("RedProduct", JSON.stringify(data));

      toast.success("Connexion réussie");

      setFormDataConnexion({
        email: "",
        password: "",
      });

      navigate("/accueil/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Connexion échouée, veuillez vérifier vos informations");
      console.error(error);
    }
  };

  return {
    formDataConnexion,
    setFormDataConnexion,
    handleSubmit,
    isLoading,
  };
};
