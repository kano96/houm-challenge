import { Box, Typography } from "@mui/material";
import React from "react";
import HoumLogoIcon from "../../assets/Icons/HoumLogoIcon";
import { AboutStyles as styles } from "./About.styles";

const About: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h1" sx={styles.title}>
        About
      </Typography>
      <Typography variant="body1">
        This web app was made by Kevin Torres, this is part of the recruitment
        process of Houm.
      </Typography>
      <HoumLogoIcon sx={styles.icon} />
    </Box>
  );
};

export default About;
