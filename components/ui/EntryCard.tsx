import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { DragEvent, FC, useContext } from 'react';
import { Entry } from "../../interface";
import { UIContext } from '../../context/ui/UIContext';

interface Props {
  entry: Entry;
}

const EntryCard: FC<Props> = ({ entry }) => {

  const { startDragging } = useContext(UIContext);

  const onDraqStart = (event: DragEvent): void =>{
      event.dataTransfer.setData('id', entry._id);

      startDragging(true);
  }

  const onDragEnd = (): void => {
    startDragging(false);
  }

  return (
    <Card sx={{ marginBottom: 1.5, padding: 0 }}
    draggable
    onDragStart={ onDraqStart }
    onDragEnd = { onDragEnd }
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>{ entry.description }</Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">fecha  </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
