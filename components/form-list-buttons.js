import { Box, Button, Typography, Grid, Card, TextField } from "@mui/material";

export const FormListButtons = () => {
  return (
    <Box
      sx={{
        pb: 3,
        pt: {
          xs: 3,
          lg: 8,
        },
        px: 3,
      }}
    >
      <Box
        sx={{
          display: {
            // lg: 'none'
          },
          mb: 2,
        }}
      >
        <Box>
          <TextField
            defaultValue=""
            fullWidth
            label="Search"
            placeholder="Search by "
            size={"small"}
          />
        </Box>
        <Box mt={2}>
          <Card md={12} sx={{ bgcolor: "white" }}>
            <Typography
              color="disabled"
              variant="subtitle2"
              sx={{
                p: 1,
                mt: 1,
                textAlign: "left",
              }}
            >
              Email
            </Typography>
          </Card>
        </Box>
        <Box mt={2}>
          <Card md={12} sx={{ bgcolor: "white" }}>
            <Typography
              color="disabled"
              variant="subtitle2"
              sx={{
                p: 1,
                mt: 1,
                textAlign: "left",
              }}
            >
              Two
            </Typography>
          </Card>
        </Box>
        <Box mt={2}>
          <Card md={12} sx={{ bgcolor: "white" }}>
            <Typography
              color="disabled"
              variant="subtitle2"
              sx={{
                p: 1,
                mt: 1,
                textAlign: "left",
              }}
            >
              Three
            </Typography>
          </Card>
        </Box>
        <Box mt={2}>
          <Card md={12} sx={{ bgcolor: "white" }}>
            <Typography
              color="disabled"
              variant="subtitle2"
              sx={{
                p: 1,
                mt: 1,
                textAlign: "left",
              }}
            >
              Four
            </Typography>
          </Card>
        </Box>
        <Box mt={2}>
          <Card md={12} sx={{ bgcolor: "white" }}>
            <Typography
              color="disabled"
              variant="subtitle2"
              sx={{
                p: 1,
                mt: 1,
                textAlign: "left",
              }}
            >
              Five
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
