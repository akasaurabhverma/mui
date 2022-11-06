import { Box } from "@mui/material";
import "./App.css";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiButtons } from "./components/MuiButton";
import { MuiButtonGroup } from "./components/MuiButtonGroup";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiCard } from "./components/MuiCard";
import { MuiLayout } from "./components/MuiLayout";
import { MuiRadio } from "./components/MuiRadio";
import { MuiRating } from "./components/MuiRating";
import { MuiSelect } from "./components/MuiSelect";
import { MuiTextField } from "./components/MuiTextField";
import { MuiToggleButtonGroup } from "./components/MuiToggleButtonGroup";
import { MuiTypography } from "./components/MuiTypography";
import { MuiAccordion } from "./components/MuiAccordion";

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
      <MuiRating />
      <MuiAutocomplete />
      <MuiLayout />
      <MuiCard />*/}
      <MuiAccordion />
    </Box>
  );
}

export default App;
