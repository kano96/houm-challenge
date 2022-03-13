import axios from "axios";
import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buildApiUrl } from "../../../shared/utils/buildApiRequest";
import {
  hideLoading,
  setCharacters,
  setName,
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
  const status: string = useSelector(statusFilterSelector);
  const gender: string = useSelector(genderFilterSelector);
  const page: number = useSelector(pageSelector);
  const name: string = useSelector(nameSelector);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name) {
      try {
        dispatch(showLoading);

        const apiUrl = buildApiUrl(status, gender, page, name);
        const { data } = await axios.get(apiUrl);
        const info = data.info;
        const character = data.results;

        dispatch(setTotalPages(info.pages));
        dispatch(setTotalResults(info.count));
        dispatch(setCharacters(character));
      } catch (e) {
      } finally {
        dispatch(hideLoading);
      }
    }
  };

  return {
    handleSubmit,
    handleInputChange,
    name,
  };
};

export default useSearchState;
