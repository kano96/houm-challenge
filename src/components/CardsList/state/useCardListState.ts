/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buildApiUrl } from "../../../shared/utils/buildApiRequest";
import {
  Gender,
  ICharacter,
  Status,
} from "../../../store/interfaces/AppState.interfaces";
import {
  showLoading,
  setCharacters,
  setTotalPages,
  setTotalResults,
  hideLoading,
  setFilters,
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
  const status: Status = useSelector(statusFilterSelector);
  const gender: Gender = useSelector(genderFilterSelector);
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
    dispatch(dispatch(setFilters({ status, gender, page: value, name })));
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
        dispatch(setTotalResults(0));
      } finally {
        dispatch(hideLoading());
      }
    })();
  }, [status, gender, page]);

  return { characters, totalPages, page, results, isLoading, handleChangePage };
};

export default useCardListState;
