/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buildApiUrl } from "../../../shared/utils/buildApiRequest";
import { ICharacter } from "../../../store/interfaces/AppState.interfaces";
import {
  showLoading,
  setCharacters,
  setTotalPages,
  setTotalResults,
  hideLoading,
  setPage,
} from "../../../store/reducers/app";
import {
  charactersSelector,
  genderFilterSelector,
  loadingSelector,
  nameSelector,
  pageSelector,
  statusFilterSelector,
  totalPagesSelector,
  totalResultsSelector,
} from "../../../store/selectors/selectors";

const useCardListState = () => {
  const status: string = useSelector(statusFilterSelector);
  const gender: string = useSelector(genderFilterSelector);
  const page: number = useSelector(pageSelector);
  const name: string = useSelector(nameSelector);
  const characters: ICharacter[] = useSelector(charactersSelector);
  const totalPages: number = useSelector(totalPagesSelector);
  const results: number = useSelector(totalResultsSelector);
  const isLoading: boolean = useSelector(loadingSelector);

  const dispatch = useDispatch();

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setPage(value));
  };

  useEffect(() => {
    (async () => {
      try {
        dispatch(showLoading());

        const API_URL = buildApiUrl({ status, gender, page, name });
        const { data } = await axios.get(API_URL);
        const info = data.info;
        const characters = data.results;

        dispatch(setCharacters(characters));
        dispatch(setTotalPages(info.pages));
        dispatch(setTotalResults(info.count));
      } catch (e) {
      } finally {
        dispatch(hideLoading());
      }
    })();
  }, [status, gender, page]);

  return { characters, totalPages, page, results, isLoading, handleChangePage };
};

export default useCardListState;
