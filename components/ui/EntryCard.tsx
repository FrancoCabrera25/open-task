import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Entry } from "../../interface";

interface Props {
  entry: Entry;
}

const EntryCard: FC<Props> = ({ entry }) => {
  return (
    <Card sx={{ marginBottom: 1.5, padding: 0 }}>
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