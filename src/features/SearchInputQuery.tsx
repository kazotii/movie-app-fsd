import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const queryFromUrl = searchParams.get("query") || "";
  const [localValue, setLocalValue] = useState(queryFromUrl);

  useEffect(() => {
    setLocalValue(queryFromUrl);
  }, [queryFromUrl]);

  useEffect(() => {
    if (localValue === queryFromUrl) return;
    const timeoutId = setTimeout(() => {
      if (localValue.trim() && location.pathname !== "/") {
        navigate(`/?query=${encodeURIComponent(localValue)}`);
        return;
      }
      const newParams = new URLSearchParams(searchParams);
      
      if (localValue) {
        newParams.set("query", localValue);
      } else {
        newParams.delete("query");
      }
      newParams.set("page", "1");
      const shouldReplace = !!searchParams.get("query");

      setSearchParams(newParams, { replace: shouldReplace });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [localValue, navigate, location.pathname, searchParams, setSearchParams, queryFromUrl]);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      className="w-full px-2 py-1 transition-all rounded-lg border border-white"
      ref={inputRef}
      type="text"
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
      placeholder="Search movies"
    />
  );
};