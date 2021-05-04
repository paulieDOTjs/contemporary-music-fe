import { Dispatch, SetStateAction } from "react";

export interface PageProps {
  setErrorMessage: Dispatch<SetStateAction<string>>;
}
