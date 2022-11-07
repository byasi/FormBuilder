import {
  Box,
  Typography,
  TextField,
} from "@mui/material";


export const Display = (props) => {
  const { formTitle, setFormTitle } = props;
  return (
    <Box>
      <Typography variant="subtitle3">Label</Typography>
      <TextField 
      mt={2}
      fullWidth
      name="formTitle"
      value={formTitle}
      onChange={(event) =>setFormTitle(event.target.value)}

      />

    </Box>
  )
}