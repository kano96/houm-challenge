import React from "react";
import { Pagination } from "@mui/material";
import { PaginationStyles as styles } from "./Pagination.styles";

export interface CardsPaginationProps {
  totalPages: number;
  page: number;
  handleChangePage: (_event: React.ChangeEvent<unknown>, value: number) => void;
}

const CardsPagination: React.FC<CardsPaginationProps> = (
  props: CardsPaginationProps
) => {
  return (
    <>
      <Pagination
        count={props.totalPages}
        color="secondary"
        sx={styles.pagination}
        onChange={props.handleChangePage}
        page={props.page}
      />
    </>
  );
};

export default CardsPagination;
