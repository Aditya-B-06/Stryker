import sig226 from "./images/ProductImages/226X-9-Legion.png";
import flux from "./images/ProductImages/365FLUX-RXSL-LEFT.png"
import xr1991 from "./images/ProductImages/SIG-1911XR-E-comm-LEFT.png"
import cz75b from "./images/ProductImages/czm.png"
import baikal from "./images/ProductImages/baikal.jpg"

import ak47 from "./images/ProductImagesMedium/AK74.jpg"
import mga from "./images/ProductImagesMedium/LMG-762-16B-BLK-FLD-MGA.png"
import mohawk from "./images/ProductImagesMedium/MOHAWK-R516G3-556N-16B.png"
import mcx from "./images/ProductImagesMedium/MCX-LT-556.png"
import carbine from "./images/ProductImagesMedium/18.5-KS-K-special-carbine.png"
import rm400 from "./images/ProductImagesMedium/Sig_RM400-SDI-16B-MSGRN_E-Comm_LEFT.png"

import win from "./images/ammos/winchester.png"
import w207 from "./images/ammos/w207.jpg"
import hunt from "./images/ammos/hunting.jpg"
import venari from "./images/ammos/venari.jpg"
import legion11 from "./images/ammos/legion.jpg"
import nato from "./images/ammos/nato.jpg"

import laser from "./images/accessories/romeomsrgen2.png"
import thel from "./images/accessories/titaniumHelmet.jpg"
import sniper from "./images/accessories/Whiskey6FFP.png"
import knifr from "./images/accessories/Knife.jpg"
import armor from "./images/accessories/protective_set_4m_systems.jpg"
import silence from "./images/accessories/HEXIUM556INC.png"

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
    price: 1400,
    qty: 0,
    image:"https://cdn.bfldr.com/EN1VTHA0/at/gxk5hx9ptzn57h7qpjk9xq6t/320X5-9-MAXM2_LEFT.png?auto=webp&format=png",
    desc:"Modular, striker-fired pistol featuring a serialized trigger group for easy caliber and frame size customization.",
    video: "",
    supplier: "SIG Sauer",
    type: "light-arm",
  },

  {
    id: 5,
    name:"Baikal PLK",
    price:600,
    qty: 0,
    image:baikal,
    desc:"Sleek and ergonomic, a modernized Russian sidearm engineered for high-precision firing and concealed tactical deployment.",
    country: "russia",
    video: "",
    supplier: "Kalashnikov",
    type: "light-arm",
  },

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

  },
  {
    id: 7,
    name:"AK 74",
    price:2100,
    qty:0,
    image:ak47,
    desc:"A Soviet icon chambered in 5.45mm, known for its low recoil and signature muzzle brake.",
    country:"Russia",
    supplier:"Kalashnikov",
    type:"medium-arm"
  },
  {
    id: 8,
    name:"MGA SAW",
    price:15_000,
    qty:0,
    image:mga,
    desc:"A versatile, belt-fed 7.62mm light machine gun featuring a folding stock and sixteen-inch barrel.",
    country:"USA",
    supplier: "MGA",
    type:"medium-arm",
  },
  {
    id:9,
    name:"516 Mohawk",
    price:2000,
    qty:0,
    image:mohawk,
    desc:"Rugged short-stroke piston rifle featuring ambidextrous controls, adjustable gas system, and unique side charging handle.",
    country:"USA",
    supplier: "SIG Sauer",
    type:"medium-arm",
  },
  {
    id: 10,
    name:"M400 SDI X",
    price:1750,
    qty:0,
    image:rm400,
    desc:"Premium direct-impingement rifle featuring fully ambidextrous controls, match trigger, and durable Moss Green finish.",
    country:"Switzerland",
    supplier: "SIG Sauer",
    type:"medium-arm",
  },
  {
    id: 11,
    name:"MCX Spear-LT",
    price:2500,
    qty:0,
    image:mcx,
    desc:"Lightweight short-stroke piston rifle featuring a folding stock, ambidextrous controls, and a modular handguard.",
    country:"Switzerland",
    supplier: "SIG Sauer",
    type:"medium-arm",
  },
  {
    id: 12,
    name:"18,5 KS-K Special Carbine",
    price:1400,
    qty:0,
    image:carbine,
    desc:"Rugged Russian semi-automatic 12-gauge shotgun featuring a folding stock and high-capacity detachable box magazine.",
    country:"Russia",
    supplier: "Kalashnikov",
    type:"medium-arm",
  },
  {
    id:13,
    name:"0.300 Winchester Magnum",
    price:50,
    qty:0,
    image:win,
    caliber:0.308,
    rounds:20,
    type:"ammo"
  },
  {
    id:14,
    name:"0.270 Winchester",
    price:45,
    qty:0,
    image:w207,
    caliber:0.277,
    rounds:20,
    type:"ammo",
  },
  {
    id:15,
    name:"Elite Hunting Platinum Hunter",
    price:65,
    qty:0,
    image:hunt,
    caliber:0.264,
    rounds:20,
    type:"ammo",
  },
  {
    id:16,
    name:"Sig Sauer Venari",
    price:40,
    qty:0,
    image:venari,
    caliber:0.284,
    rounds:20,
    type:"ammo",
  },
  {
    id:17,
    name:"365 V-Crown Elite Performance",
    price:25,
    qty:0,
    image:legion11,
    caliber:"9mm",
    rounds:20,
    type:"ammo",
  },
  {
    id:18,
    name:"M17 Elite Ball",
    price:30,
    qty:0,
    image:nato,
    caliber:"9mm",
    rounds:50,
    type:"ammo"
  },
  {
    id:19,
    name:"Titanium Helmet",
    price:2500,
    qty:0,
    image:thel,
    type:"access",
    desc:"Elite ballistic protection featuring a high-strength titanium shell for maximum defense against high-velocity projectiles."
  },
  {
    id:20,
    name:"SIG Reserve Knife ",
    price:500,
    qty:0,
    image:knifr,
    type:"access",
    desc:"A limited-edition fixed blade featuring a premium S45VN steel blade and unique ash burlwood handle."
  },
  {
    id:21,
    name:"Protective 4M Systems",
    price:1200,
    qty:0,
    image:armor,
    type:"access",
    desc:"Comprehensive modular impact-protection system designed for maximum mobility and defense against blunt force trauma."
  },
  {
    id:24,
    name:"WHISKEY6 3-18x44mm FFP",
    price:1040,
    qty:0,
    image:sniper,
    type:"access",
    desc:"Lightweight first-focal-plane hunting scope featuring high-definition glass, locking turrets, and an ultra-reliable zero-stop system."
  },
  {
    id:22,
    name:"ROMEO-MSR GEN II",
    price:140,
    qty:0,
    image:laser,
    type:"access",
    desc:"Compact enclosed red dot featuring a 2 MOA reticle, rotary brightness dial, and see-through mount."
  },
  {
    id:23,
    name:"HEXIUM 5.56 Inconel Suppressor",
    price:1000,
    qty:0,
    image:silence,
    type:"access",
    desc:"Ultra-durable 3D-printed Inconel suppressor designed for high-heat performance, low back-pressure, and maximum service life."
  }
];
