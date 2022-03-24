import { createContext } from "react";
import { Entry } from "../../interface";


interface ContextProps {
    entries: Entry[];

    //function 
    addEntry: (description: string) => void;
    updateEntry:(entry: Entry, showSnackBar: boolean) => void;
}

export const EntriesContext = createContext({} as ContextProps);
