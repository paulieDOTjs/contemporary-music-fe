import { useEffect } from "react";
import { SetErrorMessageType, ERROR_MESSAGES } from "../models/ErrorType";
import "./ErrorMessage.scss";

export default function ErrorMessage(props: {
  message: string;
  setErrorMessage: SetErrorMessageType;
}) {
  const { setErrorMessage } = props;
  useEffect(() => {
    const timer = setTimeout(
      () => setErrorMessage(ERROR_MESSAGES.FAILED_LOAD_DATA),
      5000
    );

    return () => {
      clearTimeout(timer);
    };
  }, [setErrorMessage]);

  return <div className="ErrorMessage">{props.message}</div>;
}
