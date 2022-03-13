import { UIstate } from "./UIProvider";

type UIActiontype =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "UI - Add Entry"; payload: boolean }
  | { type: "UI - Start Dragging"; payload: boolean }

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
    case "UI - Add Entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    case "UI - Start Dragging":
      return {
        ...state,
        isDragging: action.payload,
      };

    default:
      return state;
  }
};
