const RICK_AND_MORTY_API = "https://rickandmortyapi.com/api/character";

export const buildApiUrl = (status = "", gender = "", page = 1): string => {
  if (status && gender) {
    return `${RICK_AND_MORTY_API}/?page=${page}&gender=${gender}&status=${status}`;
  }
  if (status) {
    return `${RICK_AND_MORTY_API}/?page=${page}&status=${status}`;
  }
  if (gender) {
    return `${RICK_AND_MORTY_API}/?page=${page}&gender=${gender}`;
  }
  console.log(`${RICK_AND_MORTY_API}/?page=${page}`);

  return `${RICK_AND_MORTY_API}/?page=${page}`;
};
