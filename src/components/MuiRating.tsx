import { AirlineSeatFlat, AirlineSeatFlatAngled } from "@mui/icons-material";
import { Stack, Rating, FormControl } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  const handleChange = (_event: ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  useEffect(() => console.log(value), [value]);
  return (
    <Stack>
      <FormControl>
        <Rating
          icon={<AirlineSeatFlat color="secondary" fontSize="inherit" />}
          emptyIcon={<AirlineSeatFlatAngled fontSize="inherit" />}
          precision={1}
          value={value}
          onChange={handleChange}
          size="large"
          readOnly
        />
      </FormControl>
    </Stack>
  );
};
