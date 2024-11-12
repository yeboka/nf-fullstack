import potatoeIMG from "../assets/potatoes.jpeg";
import pickleImg from "../assets/pickles.jpg";

export const products = [
  {
    id: 1,
    name: "potatoe",
    price: 100,
    amountLeft: 10,
    img: potatoeIMG,
    type: "veg",
  },
  {
    id: 2,
    name: "pickle",
    price: 400,
    amountLeft: 6,
    img: pickleImg,
    type: "veg",
    notInStock: "true",
  },
  {
    id: 3,
    name: "airan",
    price: 80,
    amountLeft: 100,
    img: pickleImg,
    type: "rest",
  },
  {
    id: 4,
    name: "strawberry",
    price: 1100,
    amountLeft: 6,
    img: pickleImg,
    type: "rest",
    notInStock: "true",
  },
  {
    id: 5,
    name: "blackberry",
    price: 9100,
    amountLeft: 39,
    img: potatoeIMG,
    type: "rest",
  },
];