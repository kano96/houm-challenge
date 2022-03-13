import { useDispatch, useSelector } from "react-redux";
import { Gender, Status } from "../../../store/interfaces/AppState.interfaces";
import { setFilters } from "../../../store/reducers/app";
import {
  statusFilterSelector,
  genderFilterSelector,
  nameSelector,
} from "../../../store/selectors/selectors";

const useFiltersState = () => {
  const status: Status = useSelector(statusFilterSelector);
  const gender: Gender = useSelector(genderFilterSelector);
  const name: string = useSelector(nameSelector);

  const dispatch = useDispatch();

  const handleStatusFilterChange = (value: Status) => {
    dispatch(setFilters({ status: value, gender, page: 1, name }));
  };
  const handleGenderFilterChange = (value: Gender) => {
    dispatch(setFilters({ status, gender: value, page: 1, name }));
  };

  return { status, gender, handleGenderFilterChange, handleStatusFilterChange };
};

export default useFiltersState;
