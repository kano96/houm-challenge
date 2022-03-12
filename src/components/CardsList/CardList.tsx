import { Grid, Typography } from "@mui/material";
import React from "react";
import HeroCard from "./HeroCard/HeroCard";
import useCardListState from "./state/useCardListState";
import { CardListStyles as styles } from "./CardList.styles";
import CardsPagination from "./Pagination/Pagination";

const CardList: React.FC = () => {
  const { isLoading, results, page, characters, totalPages, handleChangePage } =
    useCardListState();

  if (isLoading) {
    return <Typography variant="h3">Loading...</Typography>;
  }
  if (!results) {
    return <Typography>There are no results :C</Typography>;
  }
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        item
        container
        sx={styles.cards}
        justifyContent="center"
        alignItems="center"
      >
        {characters.map((character) => (
          <HeroCard
            key={(character.id, character.name)}
            name={character.name}
            status={character.status}
            gender={character.gender}
            location={{
              name: character.location.name,
              url: character.location.url,
            }}
            image={character.image}
          />
        ))}
      </Grid>
      <Grid item>
        <CardsPagination
          totalPages={totalPages}
          handleChangePage={handleChangePage}
          page={page}
        />
      </Grid>
    </Grid>
  );
};

export default CardList;
