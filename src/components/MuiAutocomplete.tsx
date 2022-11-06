import { Autocomplete, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

type Skill = { id: number; label: string };
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux"];

const skillsOptions: Skill[] = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  const handleChange = (_event: any, newValue: string | null) =>
    setValue(newValue);
  const handleSkillChange = (_event: any, newSkill: Skill | null) =>
    setSkill(newSkill);
  useEffect(() => console.log(skill), [skill]);
  return (
    <Stack spacing={4}>
      <Stack spacing={2} width="250px">
        <Autocomplete
          size="small"
          options={skills}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={value}
          onChange={handleChange}
          freeSolo
        />
      </Stack>
      <Stack spacing={2} width="250px">
        <Autocomplete
          size="small"
          options={skillsOptions}
          renderInput={(params) => (
            <TextField {...params} label="Skill Options" />
          )}
          value={skill}
          onChange={handleSkillChange}
        />
      </Stack>
    </Stack>
  );
};
