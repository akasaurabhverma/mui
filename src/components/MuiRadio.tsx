import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

// In MUI radio buttons will be comprised of the following components:
// FormControl- It is a wrapper component for the whole thing
// FormLabel- It is a label component for the whole group
// RadioGroup- It is a wrapper component for the radio buttons
// FormControlLabel- self-closing tag/component particularly used for individual radio buttons

// Some important props
// row - will make the radio group aligned row-wise
// size and color - used on the FormControlLabel component with control prop
// error - used on the FormControl component

// for form helper text use- FormHelperText Component inside FormControl
export const MuiRadio = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="primary" />}
            label="0-2"
            value={0}
          />
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="2-3"
            value={2}
          />
          <FormControlLabel
            control={<Radio size="small" color="warning" />}
            label="3-5"
            value={3}
          />
          <FormControlLabel
            control={<Radio size="small" color="success" />}
            label="5-7"
            value={5}
          />
        </RadioGroup>
        <FormHelperText>
          Select the years of experience you carry
        </FormHelperText>
      </FormControl>
    </Box>
  );
};
