import React from "react";

export default function Modal() {
  return (
    <>
      <div className="container-fluid modalContainer">
        <div className="row modalRow w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="Modal col-lg-6 col-md-10 col-sm-10 col-xs-12">
            <div className="modalHeader bg-info">
              <div className="titreHeader bg-info">
              <span></span>
              <h2>Créer un nouveau hôtel</h2>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
