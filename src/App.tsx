import { Box } from "@mui/material";
import "./App.css";
import { MuiButtons } from "./components/MuiButton";
import { MuiButtonGroup } from "./components/MuiButtonGroup";
import { MuiRadio } from "./components/MuiRadio";
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
      <MuiSelect />*/}
      <MuiRadio />
    </Box>
  );
}

export default App;
