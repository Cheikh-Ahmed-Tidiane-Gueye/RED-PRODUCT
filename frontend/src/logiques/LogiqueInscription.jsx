// LogiqueInscription.jsx
import { useState } from "react";
import { toast } from "react-hot-toast";

export const LogiqueInscription = () => {
  const [formDataInscription, setFormDataInscription] = useState({
    inscriptionNom: "",
    inscriptionEmail: "",
    inscriptionPassword: "",
  });

  const handleSubmit = () => {
    alert(`
      Nom: ${formDataInscription.inscriptionNom}\n 
      Email: ${formDataInscription.inscriptionEmail}\n  
      Mot de passe: ${formDataInscription.inscriptionPassword}\n `);

    // Affichez la notification personnalisée avec une durée de 5 secondes
    const customNotification = toast("Inscription réussit !", {
      icon: "👏",
      duration: 5000,
      // position: "top",
      style: { background: "green", color: "#fff" },
    });

    // Réinitialise les valeurs des champs après une inscription réussie
    setFormDataInscription({
      inscriptionNom: "",
      inscriptionEmail: "",
      inscriptionPassword: "",
    });

    // Utilisez setTimeout pour masquer la notification personnalisée après 5 secondes
    setTimeout(() => {
      toast.dismiss(customNotification.id);
    }, 5000);
  };

  return { formDataInscription, setFormDataInscription, handleSubmit };
};