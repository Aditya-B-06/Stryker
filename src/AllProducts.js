import sig226 from "./images/ProductImages/226X-9-Legion.png";
import flux from "./images/ProductImages/365FLUX-RXSL-LEFT.png"
import xr1991 from "./images/ProductImages/SIG-1911XR-E-comm-LEFT.png"

import cz75b from "./images/ProductImages/czm.png"

export const products = [
  {
    id: 1,
    name: "SIG 226 Legion",
    price: 500,
    qty: 0,
    image: sig226,
    desc: "Elite, full-sized service pistol featuring an enhanced short-reset trigger, G10 grips, and X-RAY3 night sights.",
    country: "Switzerland",
    video: "PO4TJaxXQ8Y",
    supplier: "SIG Sauer",
    type: "light-arm",
  },
  {
    id: 3,
    name: "365FLUX RXSL",
    price: 450,
    qty: 0,
    image:flux,
    desc: "Compact PDW hybrid featuring a spring-deployed brace, 6-inch barrel, dual magazine system, and pre-installed optic",
    country: "Switzerland",
    video: "",
    supplier: "SIG Sauer",
    type: "light-arm",

  },
  {
    id: 2,
    name: "SIG 1911XR",
    price: 300,
    qty: 0,
    image:xr1991,
    desc: "Modernized .45 ACP 1911 featuring an optic-ready slide, flat trigger, and railed stainless steel frame.",
    country: "Switzerland",
    video: "",
    supplier: "SIG Sauer",
    type: "light-arm",
  },
  {
    id: 4,
    name: "P320",
    price: 1_399,
    qty: 0,
    image:"https://cdn.bfldr.com/EN1VTHA0/at/gxk5hx9ptzn57h7qpjk9xq6t/320X5-9-MAXM2_LEFT.png?auto=webp&format=png",
    desc:"Modular, striker-fired pistol featuring a serialized trigger group for easy caliber and frame size customization.",
    video: "",
    supplier: "SIG Sauer",
    type: "light-arm",
  },
    /*
  {
    id: 5,
    name:"CZ P10C",
    price:450,
    qty: 0,
    image:czp10c,
    desc:"Highly ergonomic, striker-fired polymer pistol with a crisp trigger, short reset, and exceptional reliability.",
    country: "czech-republic",
    video: "",
    supplier: "Colt",
    type: "light-arm",
  },
  */

  {
    id: 6,
    name: "CZ 75B",
    price:800,
    qty: 0,
    image:cz75b,
    desc:"Iconic, all-steel DA/SA 9mm with slide-in-frame design for low recoil and legendary accuracy.",
    country: "czech-republic",
    video: "",
    supplier: "Colt",
    type: "light-arm",

  }

];
