import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row-reverse"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "secondary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "secondary.light",
            },
          }}
        >
          Sigma Male
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          p={2}
          bgcolor="success.main"
          color={"pink"}
        >
          bro
        </Box>
      </Stack>
      <Grid container my={4} boxSizing="content-box">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="primary.light" p={2} m={0.5} height={400}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="success.light" p={2} m={0.5} height={400}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="warning.light" p={2} m={0.5} height={400}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="secondary.light" p={2} m={0.5} height={400}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
