import { FC, useReducer } from "react";
import { UIContext, uiReducer } from ".";

export interface UIstate {
  menuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIstate = {
  menuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = (): void => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = (): void => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const setIsAddingEntry = (isAdding: boolean): void => {
    dispatch({ type: "UI - Add Entry", payload: isAdding });
  };

  const startDragging = (isStartDragging: boolean): void => {
        dispatch({ type: 'UI - Start Dragging', payload: isStartDragging})
  }

  return (
    <UIContext.Provider
      value={{
        ...state,

        // methods
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
