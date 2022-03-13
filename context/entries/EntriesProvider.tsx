import { FC, useReducer } from "react";
import { EntriesContext, entriesReducer  } from '.';
import { Entry } from "../../interface";
import { v4 as uuidv4} from 'uuid';
import { EntryStatus } from '../../interface/entry';

export interface EntriesState{
    entries: Entry[];
}


const ENTRIES_INITIAL_STATE: EntriesState  = {
    entries: [
        {
            _id: uuidv4(),
            description: 'prueba',
            status: EntryStatus.PENDING,
            createdAt: Date.now(),
        },

        {
            _id: uuidv4(),
            description:'prueba',
            status: EntryStatus.INPROGRES,
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'prueba',
            status: EntryStatus.PENDING,
            createdAt: Date.now(),
        }
    ]
}


const EntriesProvider: FC = ({ children }) => {
 
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
 

    return(
            <EntriesContext.Provider value= {{
                ...state,
            }}>
              { children }      
            </EntriesContext.Provider>
        )
}

export default EntriesProvider;


