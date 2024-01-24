import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../composants/CustomButton";
import LogoRedProduct from "../composants/LogoRedProduct";
import ConnectInput from "../composants/inputFields";
import { inputFieldsDataConnexion } from "../composants/Utils";
import { LogiqueConnexion} from "../logiques/LogiqueConnexion";

export default function Connexion() {
  const { formDataConnexion, setFormDataConnexion, handleSubmit } =
    LogiqueConnexion();

  return (
    <>
      <div className="ConnexionContainer d-flex justify-content-center align-items-center">
        <div className="form">
          <LogoRedProduct />
          <form action="" className="formConnect d-flex flex-column p-5 mx-4">
            <p className="p1 mb-5">Connectez-vous en tant qu'admin</p>
            {inputFieldsDataConnexion.map((field, index) => (
              <div key={index} className="mb-4">
                <ConnectInput
                  {...field}
                  value={formDataConnexion[field.name]}
                  onChange={(e) =>
                    setFormDataConnexion({
                      ...formDataConnexion,
                      [field.name]: e.target.value,
                    })
                  }
                />
              </div>
            ))}
            <Link to="" className="Link">
              <CustomButton label="Se connecter" className="connexionB" />
            </Link>
          </form>
          <center>
            <Link to="/forgotpassword" className="Link">
              <p className="p2 mt-4 mb-5" style={{ color: "#FFD964" }}>
                Mot de passe oublié ?
              </p>
            </Link>

            <p className="p2" style={{ color: "white" }}>
              Vous n'avez pas de compte?
              <Link to="/Connexion" className="Link">
                <span className="p2 ms-2" style={{ color: "#FFD964" }}>
                  S'inscrire
                </span>
              </Link>
            </p>
          </center>
        </div>
      </div>
    </>
  );
}