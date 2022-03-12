export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type Gender = "female" | "male" | "genderless" | "unknown" | "";
export type Status = "alive" | "dead" | "unknown" | "";

export interface IFilters {
  status: Status;
  gender: Gender;
}

export interface IAppState {
  loading: boolean;
  characters: ICharacter[];
  page: number;
  filters: IFilters;
  totalResults: number;
  totalPages: number;
}
