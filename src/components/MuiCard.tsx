import { Cancel, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Children } from "react";

export const MuiCard = () => {
  return (
    <Grid container>
      {Children.toArray(
        new Array(10).fill(
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Box m={1} display="flex">
              <Card>
                <CardMedia
                  component="img"
                  height="140px"
                  image="https://source.unsplash.com/random"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    About me
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Here's some text about me. This text describes me very well.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    endIcon={<Cancel />}
                    color="error"
                    size="small"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<Send />}
                    color="success"
                    size="small"
                  >
                    Send
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        )
      )}
    </Grid>
  );
};
