import { Button, ButtonGroup, Stack } from "@mui/material";

export const MuiButtonGroup = () => {
  return (
    <Stack spacing={4} direction="row">
      <ButtonGroup
        variant="contained"
        color="secondary"
        size="small"
        orientation="vertical"
      >
        <Button>Top</Button>
        <Button>Mid</Button>
        <Button>Bottom</Button>
      </ButtonGroup>
    </Stack>
  );
};
