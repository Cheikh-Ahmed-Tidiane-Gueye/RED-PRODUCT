// LogiqueConnexion.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

export const LogiqueConnexion = (data) => {
  const navigate = useNavigate()
  const [formDataConnexion, setFormDataConnexion] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SERVER_URL = "http://localhost:5000/api/connexion";
    try {
      let data = {
        formDataConnexion,
      };

      const response = await axios.post(
        SERVER_URL, formDataConnexion, data
      );
      
      console.log(response.data);

      localStorage.setItem("RedProduct", JSON.stringify(data));

      toast.success("Connexion réussie");

      setFormDataConnexion({
        email: "",
        password: "",
      });

      navigate("/accueil/dashboard");
    } catch (error) {
      toast.error("Connexion échouée, veuillez vérifier vos informations");
      console.error(error);
    }
  };

  return {
    formDataConnexion,
    setFormDataConnexion,
    handleSubmit,
  };
};