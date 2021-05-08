import { Dispatch, SetStateAction } from "react";

export type SetErrorMessageType = Dispatch<SetStateAction<ERROR_MESSAGES>>;
export type SetRetriesType = Dispatch<SetStateAction<number>>;

export enum ERROR_MESSAGES {
  CLEAR = "",
  FAILED_LOAD_DATA = "Error connecting to backend server. Trying again...",
  RETRY_OVERLOAD = "Error connecting to backend server. Please come back later.",
}
