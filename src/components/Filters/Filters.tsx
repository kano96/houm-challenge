import { Grid, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { Gender, Status } from "../../store/interfaces/AppState.interfaces";
import useFiltersState from "./state/useFiltersState";
import { FiltersStyles as styles } from "./Filters.styles";

const Filters: React.FC = () => {
  const { status, gender, handleGenderFilterChange, handleStatusFilterChange } =
    useFiltersState();

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography variant="body1">Filter by status: </Typography>
        <Select
          value={status}
          onChange={(e) => handleStatusFilterChange(e.target.value as Status)}
          displayEmpty
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <Typography variant="body1">Filter by gender: </Typography>
        <Select
          value={gender}
          onChange={(e) => handleGenderFilterChange(e.target.value as Gender)}
          displayEmpty
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="genderless">Genderless</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export default Filters;
