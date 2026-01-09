import { NavLink } from "react-router-dom";
import { SearchInput } from "../features/SearchInputQuery";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../entities/movie/model/filterSlice";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <div>
        <h1 className="font-bold">MOVIE APP</h1>
        <div>
          <NavLink
            to="/"
            onClick={() => dispatch(setSearchQuery(""))}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-amber-400 border-b-2 border-amber-400"
                : "text-white font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-amber-400 border-b-2 border-amber-400"
                : "text-white font-bold"
            }
          >
            Favorites
          </NavLink>
        </div>
      </div>

      <div>
        <SearchInput />
      </div>
    </nav>
  );
};
