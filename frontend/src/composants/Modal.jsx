import React from "react";
import { GoArrowLeft } from "react-icons/go";
import ModalInput from "../composants/inputFields";
import { inputFieldsDataModal } from "../composants/Utils";
import CustomButton from "./CustomButton";
import { LogiqueAjoutCartesHotel } from "../services/LogiqueAjoutHotel";

export default function Modal({ onClose, onAddHotel }) {
  const {
    formDataAjoutCartesHotel,
    setFormDataAjoutCartesHotel,
    handleSubmit,
    isLoading,
  } = LogiqueAjoutCartesHotel({ onAddHotel });;

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
          <form action="" className="row modalForm" onSubmit={handleSubmit}>
            {inputFieldsDataModal.map((field, index) => (
              <ModalInput
                key={index}
                {...field}
                value={formDataAjoutCartesHotel[field.name]}
                onChange={(e) =>
                  setFormDataAjoutCartesHotel({
                    ...formDataAjoutCartesHotel,
                    [field.name]: e.target.value,
                  })
                }
              />
            ))}
            <div className="myInputModalFile">
              <ModalInput
                type="file"
                className="ModalFile"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();

                  reader.onloadend = () => {
                    setFormDataAjoutCartesHotel({
                      ...formDataAjoutCartesHotel,
                      src: reader.result,
                    });
                  };

                  if (file) {
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
            <div className=" d-flex justify-content-end">
              <CustomButton
                label={isLoading ? "Enregistrement..." : "Enregistrer"}
                className={"boutonEnv"}
                disabled={isLoading}
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
