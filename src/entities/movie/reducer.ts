interface State {
  query: string;
  year: number | null;
  genreId: number;
}

type Action =
  | { type: "SET_GENRE"; payload: number }
  | { type: "SET_YEAR"; payload: number | null }
  | { type: "INPUT_QUERY"; payload: string }
  | { type: "RESET_FILTERS" };

export const initialState: State = {
  query: "",
  year: null,
  genreId: 0,
};

export function filterReducer(state: State, action: Action): State {
  switch (action.type) {
    case "INPUT_QUERY":
      return { ...state, query: action.payload };

    case "SET_YEAR":
      return { ...state, year: action.payload };

    case "SET_GENRE":
      return { ...state, genreId: action.payload };

    case "RESET_FILTERS":
      return initialState;

    default:
      return state;
  }
}