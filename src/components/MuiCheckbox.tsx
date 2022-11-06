import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState, ChangeEvent, useEffect } from "react";

export const MuiCheckbox = () => {
  const [atc, SetAtc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    SetAtc(event.target.checked);
  };
  const handleSkillsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills((curSkill) => [...curSkill, event.target.value]);
    } else {
      setSkills((curSkill) =>
        curSkill.filter((skill) => skill !== event.target.value)
      );
    }
  };
  useEffect(() => console.log({ skills }), [skills]);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={
            <Checkbox size="small" checked={atc} onChange={handleChange} />
          }
        />
      </Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={
            <Checkbox
              icon={<BookmarkBorder />}
              checkedIcon={<Bookmark />}
              checked={atc}
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  size="small"
                  color="success"
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
