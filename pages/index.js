import { useState } from "react";
import Head from "next/head";
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Divider,
  Grid,
  Typography,
  ButtonGroup,
  Button,
  Radio,
} from "@mui/material";
import { FormListButtons } from "../components/form-list-buttons";
import { CreateForm } from "../components/create-form";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState([]);
  return (
    <>
      <Head>
        <title>Form Builder</title>
      </Head>
      <CreateForm
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        setFormData={setFormData}
        formData={formData}
      />
      <Grid container md={12} xs={12}>
        <Grid item md={12}>
          <Typography variant="h5">Build A Form</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container md={12} xs={12} mt={3}>
        <Grid item md={10}></Grid>
        <Grid item md={2} align="right" mb={2}>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button>One</Button>
            <Button onClick={handleOpen}>Create Form</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Divider />
      <Box
        component="main"
        sx={{
          background: "#fff",
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <Grid container md={12} xs={12}>
          <Grid item md={4}>
            <FormListButtons />
          </Grid>
          <Grid item md={8} mt={6}>
            <Typography variant="h5">{formData.formTitle}</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  {formData.columns?.map((column, index) => (
                    <TableCell key={index}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {formData.field?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.label}</TableCell>
                    <TableCell>
                      <Radio />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
