import { NavLink } from "react-router-dom";
import { SearchInput } from "../features/SearchInputQuery";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store/store";

export const Header = () => {
  const favoritesMovies = useSelector((state: RootState) => state.favorites.items)
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="font-bold">MOVIE APP</h1>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-bold text-amber-400 border-b-2 border-amber-400" : "text-white font-bold"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? "font-bold text-amber-400 border-b-2 border-amber-400" : "text-white font-bold"
        }
      >
        Favorites - {favoritesMovies.length}
      </NavLink>
      <SearchInput />
    </nav>
  );
};