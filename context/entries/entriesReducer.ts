import { EntriesState } from "./EntriesProvider";

type EntriesActiontype =
  | { type: "[Entries]  " }
  | { type: "UI - Close Sidebar" };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActiontype
): EntriesState => {
  switch (action.type) {
    // case "UI - Open Sidebar":
    //   return {
    //     ...state,
    //     menuOpen: true,
    //   };
    // case "UI - Close Sidebar":
    //   return {
    //     ...state,
    //     menuOpen: false,
    //   };
    default:
      return state;
  }
};
