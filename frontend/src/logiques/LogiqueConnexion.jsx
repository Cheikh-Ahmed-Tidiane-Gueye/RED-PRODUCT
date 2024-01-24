// LogiqueConnexion.jsx
import { useState } from "react";
import { toast } from "react-hot-toast";


export const LogiqueConnexion = () => {

  const [formDataConnexion, setFormDataConnexion] = useState({
    connexionEmail: "",
    connexionPassword: "",
  });

  const handleSubmit = () => {
    alert(`
      Email: ${formDataConnexion.connexionEmail}\n
      Mot de passe: ${formDataConnexion.connexionPassword}\n `);

    // Affichez la notification personnalisée avec une durée de 5 secondes
    const customNotification = toast("connexion réussit !", {
      icon: "👏",
      duration: 9000,
      // position: "top",
      style: { background: "green", color: "#fff" },
    });

    // Réinitialise les valeurs des champs après une connexion réussie
    setFormDataConnexion({
      connexionEmail: "",
      connexionPassword: "",
    });

    // Utilisez setTimeout pour masquer la notification personnalisée après 5 secondes
    setTimeout(() => {
      toast.dismiss(customNotification.id);
    }, 5000);
  };

  return { formDataConnexion, setFormDataConnexion, handleSubmit };
};
