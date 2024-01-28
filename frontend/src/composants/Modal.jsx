import React from "react";
import { GoArrowLeft } from "react-icons/go";
import ModalInput from "../composants/inputFields";
import { inputFieldsDataModal } from "../composants/Utils";
import CustomButton from "./CustomButton";

export default function Modal({ onClose }) {
  return (
    <>
      {/* <div className="container-fluid modalContainer">
        <div className="row modalRow w-100 h-100 d-flex justify-content-center align-items-center">
          
        </div>
      </div> */}
      <div className="Modal col-lg-6 col-md-10 col-sm-10 col-xs-12 m-auto mt-5">
        <div className="modalHeader">
          <div className="titreHeader">
            <GoArrowLeft className="Micon" onClick={onClose} />
            <h2 className="MH2">Créer un nouveau hôtel</h2>
          </div>
        </div>
        <div className="modalBody">
          <form action="" className="row modalForm">
            {inputFieldsDataModal.map((field, index) => (
              <ModalInput key={index} {...field} />
            ))}
            <div className="myInputModalFile">
              <ModalInput type={"file"} className={"ModalFile"} />
            </div>
            <div className=" d-flex justify-content-end">
              <CustomButton label={"Enregistrer"} className={"boutonEnv"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}