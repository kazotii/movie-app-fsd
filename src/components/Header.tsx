import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-900 text-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-amber-400 border-b-2 border-amber-400" : "text-white"
        }
      >
        Главная
      </NavLink>

      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? "text-amber-400 border-b-2 border-amber-400" : "text-white"
        }
      >
        Избранное
      </NavLink>
    </nav>
  );
};