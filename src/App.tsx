import { Box } from "@mui/material";
import "./App.css";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiButtons } from "./components/MuiButton";
import { MuiButtonGroup } from "./components/MuiButtonGroup";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiRadio } from "./components/MuiRadio";
import { MuiRating } from "./components/MuiRating";
import { MuiSelect } from "./components/MuiSelect";
import { MuiTextField } from "./components/MuiTextField";
import { MuiToggleButtonGroup } from "./components/MuiToggleButtonGroup";
import { MuiTypography } from "./components/MuiTypography";

function App() {
  return (
    <Box>
      {/* <MuiTypography />
      <MuiButtons />
      <MuiButtonGroup />
      <MuiToggleButtonGroup />
      <MuiTextField /> 
      <MuiSelect />
      <MuiRadio />
      <MuiCheckbox />
      <MuiRating />*/}
      <MuiAutocomplete />
    </Box>
  );
}

export default App;
