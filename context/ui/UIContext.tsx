import { createContext } from "react";


interface ContextProps {
    menuOpen: boolean;

    //function 
    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
