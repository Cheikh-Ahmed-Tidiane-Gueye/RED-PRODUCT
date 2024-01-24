import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../composants/CustomButton";
import LogoRedProduct from "../composants/LogoRedProduct";
import ConnectInput from "../composants/inputFields";
import { inputFieldsDataInscription } from "../composants/Utils";

export default function Inscription() {
  
  return (
    <>
      <div className="InscriptionContainer d-flex justify-content-center align-items-center">
        <div className="form">
          <LogoRedProduct />
          <form action="" className="formConnect d-flex flex-column p-5 mx-4">
            <p className="p1 mb-4">Inscriver-vous en tant que admin</p>
            {inputFieldsDataInscription.map((field, index) => (
              <div key={index} className="mb-4">
                <ConnectInput {...field} />
              </div>
            ))}
            <CustomButton label="S'inscrire" className="connexionB" />
          </form>
          <center className="my-3">
            <p className="p2" style={{ color: "white" }}>
              Vous avez déjà un compte ?
              <Link to="/" className="Link">
                <span className="p2 ms-2" style={{ color: "#FFD964" }}>
                  Se connecter
                </span>
              </Link>
            </p>
          </center>
        </div>
      </div>
    </>
  );
}