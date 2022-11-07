import { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddIcon from "@mui/icons-material/Add";

export const DataTab = (props) => {
 const { field, setField, columns, setColumns } = props;
  const addColumn = () => {
    setColumns([...columns, { label:'', value: '', tooltip: '' }]);
  };
  const deleteColumn = (columnToDelete) => {
    setColumns(columns.filter((column) => column !== columnToDelete));
  };

  const addField = () => {
   setField([...field, { label:'', value: '', tooltip: '' }]);
    
  };
  const handleChangeInput = (index, event) => {
    const values = [...field];
    values[index][event.target.name] = event.target.value;
    setField(values);
  }
  const handleChangeColumnInput = (index, event) => {
    const values = [...columns];
    values[index][event.target.name] = event.target.value;
    setColumns(values);
  }
  const deleteField = (itemToDelete) => {
    setField(field.filter((item) => item !== itemToDelete));
  };


  return (
    <>
      <Box
        sx={{
          backgroundColor: "",
          minHeight: "100%",
          p: 2,
        }}
      >
        <Typography>Questions</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Label</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Tooltip</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {field.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Button variant="outlined">
                    <MenuIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <TextField fullWidth name="label" size="small"
                  value={item.label}
                  onChange={(event) => handleChangeInput(index, event)}/>
                </TableCell>
                <TableCell>
                  <TextField fullWidth name="value" size="small" 
                  value={item.label.split(" ").join("_").toLowerCase()}
                  onChange={(event) => handleChangeInput(index, event)}/>
                </TableCell>
                <TableCell>
                  <TextField fullWidth name="tooltip" size="small" 
                  value={item.tooltip}
                  onChange={(event) => handleChangeInput(index, event)} />
                </TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => deleteField(item)}>
                    <HighlightOffIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box mt={2}>
          <Button variant="contained" onClick={() => addField(field)}>
            <AddIcon />
            Add Field
          </Button>
        </Box>
        {/* Columns */}
        <Typography sx={{ mt: 2 }}>Values</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Label</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Tooltip</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {columns.map((column, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Button variant="outlined">
                    <MenuIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <TextField fullWidth name="label" size="small"
                  value={column.label}
                  onChange={(event) => handleChangeColumnInput(index, event)}
                  />
                </TableCell>
                <TableCell>
                  <TextField fullWidth name="value" size="small"
                  value={column.label.split(" ").join("_").toLowerCase()}
                  onChange={(event) => handleChangeColumnInput(index, event)}
                  />
                </TableCell>
                <TableCell>
                  <TextField fullWidth name="tooltip" size="small" 
                  value={column.tooltip}
                  onChange={(event) => handleChangeColumnInput(index, event)}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => deleteColumn(column)}
                  >
                    <HighlightOffIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box mt={2}>
          <Button variant="contained" onClick={() => addColumn(columns)}>
            <AddIcon />
            Add Field
          </Button>
        </Box>
      </Box>
    </>
  );
};
