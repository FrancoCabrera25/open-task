import { createContext } from "react";
import { Entry } from "../../interface";


interface ContextProps {
    entries: Entry[];

    //function 

}

export const EntriesContext = createContext({} as ContextProps);
