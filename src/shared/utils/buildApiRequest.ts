const RICK_AND_MORTY_API = "https://rickandmortyapi.com/api/character";

export interface builApiUrlParams {
  status: string;
  gender: string;
  page: number;
  name: string;
}

export const buildApiUrl = ({
  status,
  gender,
  page,
  name,
}: builApiUrlParams): string => {
  if (status && gender) {
    return `${RICK_AND_MORTY_API}/?page=${page}&gender=${gender}&status=${status}`;
  }
  if (status) {
    return `${RICK_AND_MORTY_API}/?page=${page}&status=${status}`;
  }
  if (gender) {
    return `${RICK_AND_MORTY_API}/?page=${page}&gender=${gender}`;
  }
  if (name) {
    return `${RICK_AND_MORTY_API}/?page=${page}&name=${name}`;
  }

  return `${RICK_AND_MORTY_API}/?page=${page}`;
};
