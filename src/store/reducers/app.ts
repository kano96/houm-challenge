import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAppState,
  ICharacter,
  IFilters,
} from "../interfaces/AppState.interfaces";

export const initialState: IAppState = {
  loading: false,
  characters: [],
  totalResults: 0,
  totalPages: 0,
  filters: { gender: "", status: "", name: "", page: 1 },
};

export const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    hideLoading: (state) => {
      state.loading = false;
    },
    setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.characters = action.payload;
    },
    showLoading: (state) => {
      state.loading = true;
    },
    setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setFilters: (state, action: PayloadAction<IFilters>) => {
      state.filters = action.payload;
    },
  },
});

export const {
  setCharacters,
  setTotalPages,
  showLoading,
  hideLoading,
  setTotalResults,
  setFilters,
} = appSlice.actions;

export default appSlice.reducer;
