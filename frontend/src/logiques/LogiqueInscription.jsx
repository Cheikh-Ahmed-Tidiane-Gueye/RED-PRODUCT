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

    if (
      !formDataInscription.nom ||
      !formDataInscription.email ||
      !formDataInscription.password
    ) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    setIsLoading(true);

    const SERVER_URL = "http://localhost:5000/api/inscription";
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
