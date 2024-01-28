import React, { useState } from "react";
import CustomButton from "../composants/CustomButton";
import { AiOutlinePlus } from "react-icons/ai";
import CardHotel from "../composants/CardHotel";
import { CardHotelDatas } from "../composants/Utils";
import Modal from "../composants/Modal";

export default function ListeHotel() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModalToggle = () => {
    setModalVisible(!isModalVisible);
  };
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
          onClick={handleModalToggle}
        />
      </div>
      {isModalVisible && <Modal onClose={handleModalToggle} />}
      <div className="CardContainer container-fluid">
        <div
          className="CardRow row d-flex
          justify-content-md-start
          justify-content-sm-center
          align-items-center"
        >
          {CardHotelDatas.map((item, index) => (
            <CardHotel {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
