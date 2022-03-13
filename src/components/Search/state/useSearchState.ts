import axios from "axios";
import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buildApiUrl } from "../../../shared/utils/buildApiRequest";
import { Gender, Status } from "../../../store/interfaces/AppState.interfaces";
import {
  hideLoading,
  setCharacters,
  setFilters,
  setTotalPages,
  setTotalResults,
  showLoading,
} from "../../../store/reducers/app";
import {
  genderFilterSelector,
  nameSelector,
  pageSelector,
  statusFilterSelector,
} from "../../../store/selectors/selectors";

const useSearchState = () => {
  const status: Status = useSelector(statusFilterSelector);
  const gender: Gender = useSelector(genderFilterSelector);
  const page: number = useSelector(pageSelector);
  const name: string = useSelector(nameSelector);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ status, gender, page, name: event.target.value }));
  };

  const clearSearch = () => {
    dispatch(setFilters({ status, gender, page, name: "" }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name) {
      try {
        dispatch(showLoading);

        const apiUrl = buildApiUrl({ status, gender, page, name });
        const { data } = await axios.get(apiUrl);
        const info = data.info;
        const character = data.results;

        dispatch(setTotalPages(info.pages));
        dispatch(setTotalResults(info.count));
        dispatch(setCharacters(character));
      } catch (e) {
        dispatch(setTotalResults(0));
      } finally {
        dispatch(hideLoading);
      }
    }
  };

  return {
    handleSubmit,
    handleInputChange,
    clearSearch,
    name,
  };
};

export default useSearchState;
