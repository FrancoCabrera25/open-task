import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  TextField,
  CardActions,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
} from "@mui/material";
import { ChangeEvent, FC, useState, useMemo } from "react";
import Layout from "../../components/layouts/Layout";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { EntryStatus } from "../../interface/entry";

const validStatus: EntryStatus[] = [
  EntryStatus.PENDING,
  EntryStatus.INPROGRES,
  EntryStatus.FINISHED,
];

const EntryPage: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<EntryStatus>(EntryStatus.PENDING);
  const [touched, setTouched] = useState(false);

  const isValid =  useMemo(() => inputValue.length === 0 && touched, [inputValue, touched ])

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const save = () => {};

  return (
    <Layout>
      <Grid container justifyContent="center" sx={{ marginTop: 3 }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardHeader
              title={`Tarea: ${inputValue}`}
              subheader={`Creada hace`}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Descripción"
                autoFocus
                multiline
                label="Descripción"
                value={inputValue}
                onChange={onInputChange}
                onBlur={() => setTouched(true)}
                helperText={
                 isValid && "Ingrese un valor"
                }
                error = {isValid}

              />
              <FormControl>
                <FormLabel>Estado: </FormLabel>
                <RadioGroup row value={status} onChange={onStatusChange}>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={save}
                disabled= {  inputValue.length <= 0 }
              >
                Guardar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "red",
        }}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

export default EntryPage;
