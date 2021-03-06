import { Dispatch, SetStateAction } from "react";

export type SetErrorMessageType = Dispatch<SetStateAction<ERROR_MESSAGES>>;

export enum ERROR_MESSAGES {
  CLEAR = "",
  FAILED_LOAD_DATA = "Error connecting to backend server. Please come back later.",
}
