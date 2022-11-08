import { useCallback, useState, useEffect } from "react";
import {
  Box,
  Tab,
  Tabs,
  Divider,
  Button,
  Card,
  Typography,
  Container,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableColumn,
  Radio,
  Modal,
} from "@mui/material";
import { Display } from "./Display";
import { DataTab } from "./DataTab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  maxHeight: "800px",
  p: 4,
};

const tabs = [
  { label: "Display", value: "display" },
  { label: "Data", value: "data" },
  { label: "Validation", value: "validation" },
  { label: "API", value: "api" },
  { label: "Conditional", value: "conditional" },
];
export const CreateForm = (props) => {
  const { open, handleClose, setFormData } = props;
  const [currentTab, setCurrentTab] = useState("display");
  const [field, setField] = useState([{ label: "", value: "", tooltip: "" }]);
  const [columns, setColumns] = useState([
    { label: "", value: "", tooltip: "" },
  ]);
  const [formTitle, setFormTitle] = useState("");
  const addFormData = () => {
    const data = { formTitle, field, columns };
    setFormData({ ...data });
    handleClose();
  };
  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container sx={style}>
        <Grid item md={6} xs={6}>
          <Box sx={{ mt: 5 }}>
            <Container maxWidth="lg">
              <Tabs
                indicatorColor="primary"
                onChange={handleTabsChange}
                scrollButtons="auto"
                textColor="primary"
                value={currentTab}
                variant="scrollable"
              >
                {tabs.map((tab) => (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
              </Tabs>
              <Divider />
              <Grid item>
                {currentTab === "display" && (
                  <Display formTitle={formTitle} setFormTitle={setFormTitle} />
                )}
                {currentTab === "data" && (
                  <DataTab
                    field={field}
                    setField={setField}
                    columns={columns}
                    setColumns={setColumns}
                  />
                )}
              </Grid>
            </Container>
          </Box>
        </Grid>
        <Grid item md={6} xs={6} mt={7}>
          <Card>
            <Typography variant="h5">Preview</Typography>
            <Divider />
            <Typography variant="subtitle2">
              {formTitle.toUpperCase()}
            </Typography>
            {/* <Table sx={{ p: 3 }}>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  {columns.map((column, index) => (
                    <TableCell key={index}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {field.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.label}</TableCell>
                    <TableCell>
                      <Radio />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table> */}
            <Grid container md={4} 
           
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            >
              {field.map((item, index) => (
                <>
                  <Grid key={index}>
                    <Grid
                      sx={{ display: "flex", flexDirection: "row" }}
                      spacing={1}
                      p={2}
                    >
                      {item.label}
                    </Grid>
                  </Grid>
                </>
              ))}
              
            </Grid>
            <Grid container md={8}
             direction="row"
             justifyContent="space-evenly"
             alignItems="flex-end"
            >
              {columns.map((column, index) => (
                <>
                  <Grid key={index}>
                    <Grid
                      spacing={1}
                      p={2}
                    >
                      {column.label}
                    </Grid>
                    {field.map((item, key) => (
                      <Grid
                        spacing={2}
                        p={2}
                      >
                        <Radio size="small" />
                      </Grid>
                    ))}
                  </Grid>
                </>
              ))}
            </Grid>
          </Card>
          <Grid item>
            <Button onClick={addFormData}>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
            <Button>Remove</Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};
