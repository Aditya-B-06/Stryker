import { NavLink } from "react-router-dom"
import { ShoppingCart } from "lucide-react"

export default function NavBar() {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold underline"
      : "text-gray-300 hover:text-white"

  return (
    <header className="flex items-center justify-between px-6 py-6 border-3 rounded-4xl ">
      <div className="flex items-center gap-4 pr-10">
        <img
          src="/src/images/myLogo.png"
          alt="Logo"
          className="w-15  "
        />

        <nav className="flex font-bold text-2xl items-center gap-9 pl-10">
          <NavLink className={linkClasses} to="/home">Home</NavLink>
          <NavLink className={linkClasses} to="/light-arms">Light Arms</NavLink>
          <NavLink className={linkClasses} to="/medium-arms">Medium Arms</NavLink>
          <NavLink className={linkClasses} to="/ammos">Ammunition</NavLink>
          <NavLink className={linkClasses} to="/combos">Combos</NavLink>
        </nav>
      </div>

      
      <ShoppingCart className="text-white mr-6 size-10" />

    </header>
  )
}
