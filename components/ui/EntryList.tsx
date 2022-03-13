import { List, Paper } from "@mui/material";
import { FC, useContext, useMemo, DragEvent } from "react";
import { EntryCard } from ".";
import { EntryStatus } from "../../interface/entry";
import { EntriesContext } from "../../context/entries/EntriesContext";
import { UIContext } from "../../context/ui";
import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, startDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status == status),
    [entries]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>): void => {
    const id = event.dataTransfer.getData("id");

    const entry = entries.find((entry) => entry._id == id)!;
    entry.status = status;
    updateEntry(entry);
    startDragging(false);
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 180px )",
          overflow: "auto",
          backgroundColor: "transparent",
          padding: "1px 1px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
