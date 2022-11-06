import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButtons = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Contained</Button>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info" href="https://www.google.com">
          Info
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" display="block">
        <Button variant="contained" color="primary" size="small">
          small
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          medium
        </Button>
        <Button variant="contained" color="error" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" endIcon={<SendIcon />} size="small">
          Send
        </Button>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          size="small"
          disableElevation
          disableRipple
        >
          Send
        </Button>
        <IconButton aria-label="send" color="secondary" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
