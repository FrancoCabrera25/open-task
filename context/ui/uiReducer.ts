import { UIstate } from "./UIProvider";

type UIActiontype =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" };

export const uiReducer = (state: UIstate, action: UIActiontype): UIstate => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        menuOpen: true,
      };
    case "UI - Close Sidebar":
      return {
        ...state,
        menuOpen: false,
      };
    default:
      return state;
  }
};
