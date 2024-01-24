import { BiSolidDashboard } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import { IoMdMailOpen } from "react-icons/io";
import { TbLetterPSmall } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import img1 from "../assets/img/image 1.png";
import img2 from "../assets/img/image 2.png";
import img3 from "../assets/img/image 3.png";
import img4 from "../assets/img/image 4.png";
import img5 from "../assets/img/image 5.png";
import img6 from "../assets/img/image 6.png";
import img7 from "../assets/img/image 7.png";
import img8 from "../assets/img/image 8.png";



// données liste de menue
export const MenuSide = [
  {
    style: { cursor: "pointer" },
    iconSide: <BiSolidDashboard className="ico" />,
    textSide: "Dashboard",
    to: "/accueil/dashboard",
  },
  {
    style: { cursor: "pointer" },
    iconSide: <BsCardList className="ico" />,
    textSide: "Liste des hotels",
    to: "/accueil/hotel",
  },
];

// Données Cartes du Dashboars
export const CardDatas = [
  {
    cardColor: `#A88ADD`,
    icon: IoMdMailOpen,
    iconClasses: "",
    count: "125",
    label: "Formulaires",
    description: "Ici la description de ma carte",
  },
  {
    cardColor: `#0CC2AA`,
    icon: TbLetterPSmall,
    iconClasses: "",
    count: "40",
    label: "Messages",
    description: "Ici la description de ma carte",
  },
  {
    cardColor: `#FCC100`,
    icon: HiUsers,
    iconClasses: "",
    count: "600",
    label: "Utilisateurs",
    description: "Ici la description de ma carte",
  },
  {
    cardColor: `#F90000`,
    icon: IoMdMailOpen,
    iconClasses: "",
    count: "25",
    label: "E-mail",
    description: "Ici la description de ma carte",
  },
  {
    cardColor: `#9C27B0`,
    icon: TbLetterPSmall,
    iconClasses: "",
    count: "40",
    label: "Hotels",
    description: "Ici la description de ma carte",
  },
  {
    cardColor: `#1565C0`,
    icon: HiUsers,
    iconClasses: "",
    count: "02",
    label: "Eleves",
    description: "Ici la description de ma carte",
  },
];

// Données formulaire de connection
export const inputFieldsDataConnexion = [
  {
    type: "email",
    id: "email2",
    placeholder: "E-mail",
    className: "myInput mb-3",
  },
  {
    type: "password",
    id: "password2",
    placeholder: "Mot de passe",
    className: "myInput mb-3",
    name: "password",
  },
  {
    type: "checkbox",
    id: "Check2",
    className: "myInput form-check-input myform-check-input me-3 border",
    label: (
      <label className="mb-2 form-check-label" htmlFor="exampleCheck2">
        Garder-moi connecté
      </label>
    ),
  },
];

// Données formulaire d'inscri^ption
export const inputFieldsDataInscription = [
  {
    type: "text",
    id: "nom",
    name: "inscriptionNom", 
    className: "myInput mb-3",
    placeholder: "Nom",
  },
  {
    type: "email",
    id: "email1",
    name: "inscriptionEmail",
    placeholder: "E-mail",
    className: "myInput mb-3",
  },
  {
    type: "password",
    id: "password1",
    name: "inscriptionPassword",
    placeholder: "Mot de passe",
    className: "myInput mb-3",
  },
  {
    type: "checkbox",
    id: "Check1",
    className: "myInput form-check-input myform-check-input me-3 border",
    label: (
      <label className="mb-2 form-check-label" htmlFor="exampleCheck1">
        Accepter les termes et la politique
      </label>
    ),
  },
];

// Données cates d'hotels
export const CardHotelDatas = [
  {
    src: img1,
    adresse: "Boulevard Martin Luther King Dakar, 11500",
    nom: "Hôtel Terrou-Bi",
    prix: "25.000 XOF par nuit",
  },
  {
    src: img2,
    adresse: "Rte des Almadies, Dakar",
    nom: "King Fahd Palace",
    prix: "20.000 XOF par nuit",
  },
  {
    src: img3,
    adresse: "Rte de la Corniche O, Dakar 16868",
    nom: "Radisson Blu Hotel",
    prix: "22.000 XOF par nuit",
  },
  {
    src: img4,
    adresse: "Place de l'Independance, 10 Rue PL 29, Dakar",
    nom: "Pullman Dakar Teranga",
    prix: "30.000 XOF par nuit",
  },
  {
    src: img5,
    adresse: "Lac Rose, Dakar",
    nom: "Hôtel Lac Rose",
    prix: "25.000 XOF par nuit",
  },
  {
    src: img6,
    adresse: "Mbour, Sénégal",
    nom: "Hôtel Saly",
    prix: "20.000 XOF par nuit",
  },
  {
    src: img7,
    adresse: "BP64, Saly 23000",
    nom: "Palm Beach Resort & Spa",
    prix: "22.000 XOF par nuit",
  },
  {
    src: img8,
    adresse: "Place de l'Independance, 10 Rue PL 29, Dakar",
    nom: "Pullman Dakar Teranga",
    prix: "30.000 XOF par nuit",
  },
];