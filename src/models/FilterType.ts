import { Dispatch, SetStateAction } from "react";
import { ATTRIBUTE } from "./ATTRIBUTE";

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

export const getFilterKey = (attr: ATTRIBUTE): FILTER_KEYS => {
  switch (attr) {
    case ATTRIBUTE.GENRE:
      return FILTER_KEYS.GENRE;
    case ATTRIBUTE.DEGREE_OF_DIFFICULTY:
      return FILTER_KEYS.DIFFICULTY;
    default:
      return FILTER_KEYS.DECADE;
  }
};

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
