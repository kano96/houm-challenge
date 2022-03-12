import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { HeroCardStyles as styles } from "./HeroCard.styles";

export interface HeroCardProps {
  name: string;
  status: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  image: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  name,
  status,
  gender,
  location,
  image,
}: HeroCardProps) => {
  return (
    <Card sx={styles.root}>
      <CardMedia component="img" sx={styles.media} image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
