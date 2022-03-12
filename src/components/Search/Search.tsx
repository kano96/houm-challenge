import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { SeatchStyles as styles } from "./Search.styles";

const Search: React.FC = () => {
  return (
    <Grid container justifyContent="center" sx={styles.container}>
      <Grid item>
        <Typography variant="h1" color="secondary">
          Rick and Morty Characters
        </Typography>
        <Typography variant="body1" color="secondary">
          by: Kevin Torres
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          label="Type a character"
          onChange={() => {}}
          sx={styles.textField}
        />
        <Button>
          <Typography color="white">Search</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
