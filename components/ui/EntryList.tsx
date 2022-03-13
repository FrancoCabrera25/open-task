import { List, Paper } from "@mui/material";
import { FC, useContext, useMemo } from "react";
import { EntryCard } from ".";
import { EntryStatus } from "../../interface/entry";
import { EntriesContext } from "../../context/entries/EntriesContext";

interface Props {
  status: EntryStatus;
}

const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status == status),
    [entries]
  );

  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px )",
          overflow: "auto",
          backgroundColor: "transparent",
          padding: "1px 1px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
