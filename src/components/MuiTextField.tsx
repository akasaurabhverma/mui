import { InputAdornment, Stack, TextField } from "@mui/material";

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField variant="filled" label="Filled" />
        <TextField variant="outlined" label="Outlined" />
        <TextField variant="standard" label="Standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
          label="Outlined Small Secondary"
          size="small"
          color="secondary"
        />
        <TextField variant="outlined" label="Outlined" size="medium" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField variant="filled" label="Filled" color="primary" />
        {/* readonly */}
        <TextField
          variant="outlined"
          label="Outlined"
          color="secondary"
          InputProps={{ readOnly: true }}
        />
        <TextField variant="standard" label="Standard" color="success" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
          label="outlined small secondary"
          size="small"
          color="secondary"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            endAdornment: <InputAdornment position="end">Money</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
