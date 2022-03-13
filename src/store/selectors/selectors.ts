import { RootState } from "../store";

export const pageSelector = (state: RootState) => state.app.filters.page;
export const statusFilterSelector = (state: RootState) =>
  state.app.filters.status;

export const genderFilterSelector = (state: RootState) =>
  state.app.filters.gender;

export const loadingSelector = (state: RootState) => state.app.loading;

export const totalResultsSelector = (state: RootState) =>
  state.app.totalResults;
export const charactersSelector = (state: RootState) => state.app.characters;

export const totalPagesSelector = (state: RootState) => state.app.totalPages;

export const nameSelector = (state: RootState) => state.app.filters.name;
