import { useEffect } from "react";
import {
  SetErrorMessageType,
  ERROR_MESSAGES,
  SetRetriesType,
} from "../models/MessageType";
import "./ErrorMessage.scss";

export default function ErrorMessage(props: {
  retries: number;
  setRetries: SetRetriesType;
  message: string;
  setErrorMessage: SetErrorMessageType;
}) {
  const { setErrorMessage, retries, setRetries } = props;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (retries > 4) {
      timer = setTimeout(
        () => setErrorMessage(ERROR_MESSAGES.RETRY_OVERLOAD),
        5000
      );
    } else {
      setRetries(retries + 1);
      timer = setTimeout(() => setErrorMessage(ERROR_MESSAGES.CLEAR), 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [setErrorMessage, retries, setRetries]);

  return <div className="ErrorMessage">{props.message}</div>;
}
