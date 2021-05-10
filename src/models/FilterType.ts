import { Dispatch, SetStateAction } from "react";

export type SetErrorMessageType = Dispatch<SetStateAction<FilterType>>;

export type FilterType = {
  searchString: string;
  genre: string;
  decade: string;
  degreeOfDifficulty: string;
  tempoRange: [number, number];
};

export enum FILTER_KEYS {
  SEARCH_STRING = "searchString",
  GENRE = "genre",
  DECADE = "decade",
  DIFFICULTY = "degreeOfDifficulty",
}

export type HandleFilterArgsType =
  | [FILTER_KEYS, string]
  | ["BPM", [number, number]];

export const DEFAULT_FILTERS: Readonly<FilterType> = {
  searchString: "",
  genre: "",
  decade: "",
  degreeOfDifficulty: "",
  tempoRange: [40, 200],
};
