import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Gender,
  IAppState,
  ICharacter,
  Status,
} from "../interfaces/AppState.interfaces";

export const initialState: IAppState = {
  loading: false,
  characters: [],
  page: 1,
  totalResults: 0,
  totalPages: 0,
  filters: { gender: "", status: "" },
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
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<Status>) => {
      state.filters.status = action.payload;
      state.page = 1;
    },
    setGenderFilter: (state, action: PayloadAction<Gender>) => {
      state.filters.gender = action.payload;
      state.page = 1;
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
  },
});

export const {
  setCharacters,
  setStatusFilter,
  setGenderFilter,
  setPage,
  setTotalPages,
  showLoading,
  hideLoading,
  setTotalResults,
} = appSlice.actions;

export default appSlice.reducer;
