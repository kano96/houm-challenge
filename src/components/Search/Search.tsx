import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { SeatchStyles as styles, FormStyles } from "./Search.styles";
import useSearchState from "./state/useSearchState";

const Search: React.FC = () => {
  const { handleInputChange, handleSubmit, name } = useSearchState();
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
      <Grid item container sx={styles.searchContainer}>
        <form onSubmit={handleSubmit} style={FormStyles}>
          <TextField
            label="Type a character"
            onChange={handleInputChange}
            sx={styles.textField}
            value={name}
          />
          <Button sx={styles.button} type="submit">
            <Typography color="white">Search</Typography>
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Search;
