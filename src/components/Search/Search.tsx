import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Clear from "@mui/icons-material/Clear";
import React from "react";
import { SeatchStyles as styles, FormStyles } from "./Search.styles";
import useSearchState from "./state/useSearchState";

const Search: React.FC = () => {
  const { handleInputChange, handleSubmit, name, clearSearch } =
    useSearchState();

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
            label="Search a character"
            onChange={handleInputChange}
            sx={styles.textField}
            value={name}
            InputProps={
              name
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="clear search"
                          onClick={clearSearch}
                          edge="end"
                        >
                          <Clear />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : null
            }
          />
        </form>
      </Grid>
    </Grid>
  );
};

export default Search;
