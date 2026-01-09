import { NavLink } from "react-router-dom";
import { SearchInput } from "../features/SearchInputQuery";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../entities/movie/model/filterSlice";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col gap-4 p-4 text-white">
      <div className="flex justify-between">
        <div className="flex gap-4">
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
        <div>
          <h1 className="font-bold">MOVIE APP</h1>
        </div>
      </div>
      <div className="w-full mt-2 md:max-w-md">
        <SearchInput />
      </div>
    </nav>
  );
};
