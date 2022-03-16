import { FC, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import { Entry, EntryStatus } from "../../interface";
import { v4 as uuidv4 } from "uuid";
export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = (description: string): void => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description: description,
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
    };

    dispatch({ type: "[Entries]- Add-Entry", payload: newEntry });
  };

const updateEntry = (entry: Entry): void => {
  dispatch({ type: '[Entries] - Update Entry ', payload: entry });
}



  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //methods
        addEntry,
        updateEntry
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
