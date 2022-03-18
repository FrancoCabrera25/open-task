import { Entry } from "../../interface";
import { EntriesState } from "./EntriesProvider";

type EntriesActiontype =
  | { type: "[Entries]- Add-Entry"; payload: Entry }
  | { type: "[Entries] - Update Entry "; payload: Entry }
  | { type: "[Entries - Load Entry]"; payload: Entry[]}  

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActiontype
): EntriesState => {
  switch (action.type) {
    case "[Entries]- Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "[Entries] - Update Entry ":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            {
              return {
                ...entry,
                status: action.payload.status,
                description: action.payload.description,
              };
            }
          }

          return entry;
        }),
      };
      case '[Entries - Load Entry]': 
      return{
        ...state,
        entries: [...action.payload],
      }
    default:
      return state;
  }
};
