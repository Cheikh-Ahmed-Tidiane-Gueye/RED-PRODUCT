import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { inputFieldsDataModal } from "../composants/Utils";
import ModalInput from "../composants/inputFields";
import { LogiqueAjoutCartesHotel } from "../services/LogiquesAjoutHotel";
import CustomButton from "./CustomButton";

export default function Modal({ onClose, onAddHotel }) {
  const { formData, setFormData, handleSubmit, isLoading } =
    LogiqueAjoutCartesHotel({ onAddHotel });

  return (
    <>
      <div className="Modal col-lg-6 col-md-10 col-sm-10 col-xs-12 m-auto mt-5">
        <div className="modalHeader">
          <div className="titreHeader">
            <GoArrowLeft className="Micon" onClick={onClose} />
            <h2 className="MH2">Créer un nouveau hôtel</h2>
          </div>
        </div>
        <div className="modalBody">
          <form
            className="row modalForm"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            {inputFieldsDataModal.map((field, index) => (
              <ModalInput
                key={index}
                {...field}
                value={formData[field.name]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [field.name]: e.target.value,
                  })
                }
              />
            ))}
            <div className="myInputModalFile">
              <ModalInput type="file" name="image" className="ModalFile" />
            </div>
            <div className=" d-flex justify-content-end">
              <CustomButton
                label={isLoading ? "Enregistrement..." : "Enregistrer"}
                className={"boutonEnv"}
                disabled={isLoading}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
