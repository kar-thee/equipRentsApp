// import ImgElectronics from "../assets/Sections/Img_electronics.webp";
// import ImgFilmPhoto from "../assets/Sections/Img_filmPhoto.png";
// import ImgWfh from "../assets/Sections/Img_wfh.webp";
// import ImgFitness from "../assets/Sections/Img_Sports&Fitness.jpeg";
// import ImgParty from "../assets/Sections/Img_Party&Events.jpg";
// import ImgFurniture from "../assets/Sections/Img_Furniture.jpg";
// import ImgAppliances from "../assets/Sections/Img_Appliances.jpg";
// import ImgClothing from "../assets/Sections/Img_clothing&Access.webp";
// import ImgKids from "../assets/Sections/Img_kids&Babies.jpg";
// import ImgOutdoor from "../assets/Sections/Img_Outdoor.jpg";
// import ImgConstruction from "../assets/Sections/Img_Construction.webp";
// import ImgVehicle from "../assets/Sections/Img_Vehicles.webp";

import {
  ApplianceImg,
  ClothingImg,
  ConstructionImg,
  ElectronicsImg,
  FilmPhotoImg,
  FurnitureImg,
  kidsAndBabiesImg,
  NAImg,
  OutdoorImg,
  PartyAndEventsImg,
  SportsAndFitnessImg,
  VehiclesImg,
  WfhImg,
} from "../assets/AssetsUrlObject";

const HeroSection = [
  {
    title: "Electronics",
    img: ElectronicsImg || NAImg,
    href: "/store/electronics",
  },
  {
    title: "Film and photography",
    img: FilmPhotoImg,
    href: "/store/photography",
  },
  {
    title: "wfh essentials & others",
    img: WfhImg || NAImg,
    href: "/store/wfh&others",
  },
  {
    title: "Sports & Fitness",
    img: SportsAndFitnessImg || NAImg,
    href: "/store/sports&fitness",
  },
  {
    title: "Party & Events",
    img: PartyAndEventsImg || NAImg,
    href: "/store/party&events",
  },
  {
    title: "Furniture ",
    img: FurnitureImg || NAImg,
    href: "/store/furniture",
  },
  {
    title: "Appliances",
    img: ApplianceImg || NAImg,
    href: "/store/appliances",
  },
  {
    title: "Clothing & Accessories",
    img: ClothingImg || NAImg,
    href: "/store/clothing&accessories",
  },
  {
    title: "Kids and Babies",
    img: kidsAndBabiesImg || NAImg,
    href: "/store/kids&babies",
  },
  {
    title: "OutDoor",
    img: OutdoorImg || NAImg,
    href: "/store/outdoor_equipments",
  },
  {
    title: "Construction",
    img: ConstructionImg || NAImg,
    href: "/store/construction_equipments",
  },
  {
    title: "Vehicles",
    img: VehiclesImg || NAImg,
    href: "/store/vehicle_rent",
  },
];

export default HeroSection;
