import { createContext } from "react";

interface ContextProps {
  menuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  //function
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (state: boolean) => void;
  startDragging: (isStartDragging: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
