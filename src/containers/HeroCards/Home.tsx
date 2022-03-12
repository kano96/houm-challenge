import { Grid } from "@mui/material";
import React from "react";
import { HomeStyles as styles } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <>
      <Grid container sx={styles.container}>
        Hero Cards aquí
      </Grid>
    </>
  );
};

export default Home;
