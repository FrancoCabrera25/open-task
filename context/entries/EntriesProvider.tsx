import { FC, useReducer, useEffect } from "react";
import { EntriesContext, entriesReducer } from ".";
import { Entry, EntryStatus } from "../../interface";
import { entriesApi } from "../../apis";
export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = async (description: string): Promise<void> => {
    try {
      const { data } = await entriesApi.post<Entry>("/entries", {
        description,
      });

      dispatch({ type: "[Entries]- Add-Entry", payload: data });
    } catch (error) {}
  };

  const updateEntry = async (entry: Entry): Promise<void> => {
    try {
      const { _id, description, status } = entry;
      const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, {
        description,
        status,
      });

      dispatch({ type: "[Entries] - Update Entry ", payload: data });
    } catch (error) {}
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
