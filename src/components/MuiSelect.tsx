import { Box, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";

// Box is a plain old `div` tag on which we can define some properties like height and width
// Two ways to create a selection box:
// 1. From Mui TextField component
// 2. From Mui Select component

// To convert single-select component to multiple-select component
// Two steps-
// 1. use the following props- select,
// 2. use the `SelectProps` prop with the following value- {multiple: true}

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  const handleMultipleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  useEffect(() => console.log(countries), [countries]);
  return (
    <Box width="250px">
      <Stack spacing={4}>
        <TextField
          label="Select country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="UK">United Kingdom</MenuItem>
          <MenuItem value="CN">China</MenuItem>
        </TextField>
        <TextField
          label="Select multiple countries"
          size="small"
          color="success"
          select
          fullWidth
          value={countries}
          onChange={handleMultipleChange}
          helperText="Select multiple countries"
          SelectProps={{ multiple: true }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="UK">United Kingdom</MenuItem>
          <MenuItem value="CN">China</MenuItem>
        </TextField>
      </Stack>
    </Box>
  );
};
