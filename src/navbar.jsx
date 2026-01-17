import { NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import {useSelector} from "react-redux";

export default function NavBar() {
  const location = useLocation();
  const displayNos = useSelector((state)=>(state.cart.cartSize))

  const links = [
    { name: "Home", path: "/home" },
    { name: "Light Arms", path: "/light-arms" },
    { name: "Medium Arms", path: "/medium-arms" },
    { name: "Ammunition", path: "/ammos" },
    { name: "Accessories", path: "/accessories" },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-6 border-3 rounded-4xl">
      <div className="flex items-center gap-4 pr-10">
        <img
          src="/src/images/myLogo.png"
          alt="Logo"
          className="w-15"
        />

        <nav className="flex font-bold items-center gap-9 pl-10">
          {links.map((link) => (
            <div key={link.path} className="relative">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-white"
                }
              >
                {link.name}
              </NavLink>

              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-500"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex flex-row gap-5">
        <Heart className="size-10" />
        <div className="relative">
          <ShoppingCart className="text-white size-10" />
          <div className="absolute -top-1 -right-1 w-6 h-6
                    bg-red-600 text-white
                    flex items-center justify-center
                    rounded-full">
            {displayNos}
          </div>
        </div>
      </div>

    </header>
  );
}
