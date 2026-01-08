import { NavLink } from "react-router-dom";
import { SearchInput } from "../features/SearchInputQuery";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../entities/movie/model/filterSlice";

export const Header = () => {
  const dispatch = useDispatch()
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="font-bold">MOVIE APP</h1>
      <NavLink
        to="/"
        onClick={() => dispatch(setSearchQuery(""))}
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
        Favorites
      </NavLink>
      <SearchInput />
    </nav>
  );
};