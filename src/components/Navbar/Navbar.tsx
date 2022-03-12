import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import HoumLogoIcon from "../../assets/Icons/HoumLogoIcon";
import { NavbarStyles as styles } from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Grid
      container
      sx={styles.container}
      xs={12}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <HoumLogoIcon sx={styles.icon} />
      </Grid>
      <Grid item sx={styles.menu}>
        <Box sx={styles.navTab}>
          <Link to="/">
            <Typography sx={styles.text}>Home</Typography>
          </Link>
        </Box>
        <Box sx={styles.navTab}>
          <Link to="/about">
            <Typography sx={styles.text}>About</Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Navbar;
