import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { ChangeEvent, useState, useContext } from "react";
import { EntriesContext } from "../../context/entries/EntriesContext";

const NewEntry = () => {
  const { addEntry } = useContext(EntriesContext);

  const [isAdding, setIsAdding] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const [touched, setTouched] = useState(false);

  const addTask = (): void => {
    setIsAdding(true);
  };

  const clearState = (): void => {
    setIsAdding(false);
    setTouched(false);
    setInputValue('');
  };

  const cancelAddTask = (): void => {
    clearState();
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const onSave = (): void => {
    if (inputValue.length === 0) return;

    addEntry(inputValue);
    clearState();
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Agregar Descripción"
            autoFocus
            multiline
            label="Nueva descripción"
            helperText={
              inputValue.length <= 0 && touched ? "Ingrese una descripción" : ""
            }
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onInputChange}
            onBlur={() => setTouched(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<CancelOutlinedIcon />}
              onClick={cancelAddTask}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={addTask}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};

export default NewEntry;
