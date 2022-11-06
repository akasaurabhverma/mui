import { ToggleButton, ToggleButtonGroup, Stack } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useEffect, useState } from "react";

export const MuiToggleButtonGroup = () => {
  const [formats, setFormats] = useState<string[]>([]);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };

  useEffect(() => console.log(formats), [formats]);

  //IMP:  exclusive prop is required to select one option at a time
  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        aria-label="text-formatting"
        size="small"
        color="success"
        orientation="vertical"
        value={formats}
        onChange={handleFormatChange}
        // exclusive
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
