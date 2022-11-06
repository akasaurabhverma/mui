import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <>
      <Typography variant="h1">heading 1</Typography>
      <Typography variant="h2" gutterBottom>
        heading 2
      </Typography>
      <Typography variant="h3">heading 3</Typography>
      <Typography variant="h4">heading 4</Typography>
      <Typography variant="h5">heading 5</Typography>
      <Typography variant="h6">heading 6</Typography>
      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>
      {/* default value of the variant prop */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        provident veniam consequatur id beatae porro quo? Modi, veritatis?
        Voluptas incidunt ipsum nihil commodi at tenetur quibusdam impedit
        labore, inventore officiis.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        provident veniam consequatur id beatae porro quo? Modi, veritatis?
        Voluptas incidunt ipsum nihil commodi at tenetur quibusdam impedit
        labore, inventore officiis.
      </Typography>
    </>
  );
};
