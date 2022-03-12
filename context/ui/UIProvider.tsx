import { FC, useReducer } from "react";
import { UIContext, uiReducer } from ".";


export interface UIstate{
    menuOpen: boolean;
}


const UI_INITIAL_STATE: UIstate  = {
    menuOpen: false
}


const UIProvider: FC = ({ children }) => {
 
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
 

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar'})
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar'})
    }

    return(
            <UIContext.Provider value= {{
                ...state,
                
                // methods
                openSideMenu,
                closeSideMenu
            }}>
              { children }      
            </UIContext.Provider>
        )
}

export default UIProvider;


