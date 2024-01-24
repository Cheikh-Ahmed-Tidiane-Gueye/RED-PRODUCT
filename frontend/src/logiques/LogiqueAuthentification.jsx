// LogiqueAuthentification.jsx
import { useState } from "react";

export const LogiqueInscription = () => {
  const [formData, setFormData] = useState({
    inscriptionNom: "",
    inscriptionEmail: "",
    inscriptionPassword: "",
  });

  const handleSubmit = () => {
    alert(`
      Nom: ${formData.inscriptionNom}\n 
      Email: ${formData.inscriptionEmail}\n  
      Mot de passe: ${formData.inscriptionPassword}\n `);

    // Réinitialise les valeurs des champs après une inscription réussie
    setFormData({
      inscriptionNom: "",
      inscriptionEmail: "",
      inscriptionPassword: "",
    });
  };

  return { formData, setFormData, handleSubmit };
};
