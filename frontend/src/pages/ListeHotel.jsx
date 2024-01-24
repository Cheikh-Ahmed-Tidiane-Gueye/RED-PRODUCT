import React from 'react'
import CustomButton from "../composants/CustomButton";
import { AiOutlinePlus } from "react-icons/ai";
import CardHotel from "../composants/CardHotel";
import { CardHotelDatas } from "../composants/Utils";

export default function ListeHotel() {
  return (
    <>
      <div className="hotelContainer">
        <div className="titre">
          <h1 className="titreHotel">Hotel</h1>
        </div>
        <CustomButton
          icon={<AiOutlinePlus />}
          label=" Créer un nouveau hôtel"
          className="addHotel"
          classNameLabel="plus"
        />
      </div>

      <div className="CardContainer container-fluid">
        <div
          className="CardRow row d-flex
          justify-content-md-start
          justify-content-sm-center
          align-items-center"
        >
          {CardHotelDatas.map((item, index) => (
            <CardHotel {...item} key={index}/>
          ))}
        </div>
      </div>
    </>
  );
}
