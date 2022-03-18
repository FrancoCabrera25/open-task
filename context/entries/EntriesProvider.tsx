import { FC, useReducer, useEffect } from "react";
import { EntriesContext, entriesReducer } from ".";
import { Entry, EntryStatus } from "../../interface";
import { v4 as uuidv4 } from "uuid";
import { entriesApi } from "../../apis";
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
    dispatch({ type: "[Entries] - Update Entry ", payload: entry });
  };

  const loadEntries = async () => {
    const result = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entries - Load Entry]", payload: result.data });
    console.log("result", result);
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //methods
        addEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
