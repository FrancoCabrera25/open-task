import { Entry } from "../../interface";
import { EntriesState } from "./EntriesProvider";

type EntriesActiontype = { type: "[Entries]- Add-Entry"; payload: Entry };

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
    // case "UI - Close Sidebar":
    //   return {
    //     ...state,
    //     menuOpen: false,
    //   };
    default:
      return state;
  }
};
