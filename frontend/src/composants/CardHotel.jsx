import React from 'react'
import { MdDelete } from "react-icons/md";

export default function CardHotel({src, adresse, nom, prix, devise}) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-8 col-xs-12 px-0 px-sx-3">
      <div className="hotelCard">
        <div className="imgHotel">
          <img src={src} alt="image hotel" className="w-100 h-100" />
        </div>
        <div className="">
          <p className="adresse">{adresse}</p>
          <h3 className="nomHotel">{nom}</h3>
          <div className="d-flex justify-content-between align-items-center">
            <p className="prixHotel">
              {prix} {devise} par nuit
            </p>
              <MdDelete className='mt-4 p-2 del'/>
          </div>
        </div>
      </div>
    </div>
  );
}
