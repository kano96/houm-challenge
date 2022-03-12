import { Grid } from "@mui/material";
import React from "react";
import CardList from "../../components/CardsList/CardList";
import Filters from "../../components/Filters/Filters";
import Search from "../../components/Search/Search";
import { HomeStyles as styles } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <>
      <Grid container sx={styles.container} justifyContent="center" xs={12}>
        <Grid item xs={12}>
          <Search />
        </Grid>
        <Grid item xs={12}>
          <Filters />
        </Grid>
        <Grid item xs={12}>
          <CardList />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
