import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setYear, setGenre, setSearchQuery, setPage } from "../model/filterSlice";

export const useUrlSync = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const year = params.get("year");
      const genre = params.get("genre");
      const query = params.get("query");
      const page = params.get("page");
      dispatch(setYear(year ? Number(year) : null));
      dispatch(setGenre(genre ? Number(genre) : 0));
      dispatch(setSearchQuery(query || ""));
      dispatch(setPage(page ? Number(page) : 1));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [dispatch]);
};