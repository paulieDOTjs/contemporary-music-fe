import { useEffect } from "react";
import axios from "axios";

import { ENDPOINT } from "../config/ENDPOINT";
import { PageProps } from "./PageProps";

export default function HomePage(props: PageProps) {
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get(ENDPOINT.BASE_URL)
      .then((res) => console.log(res))
      .catch((err) => {
        props.setErrorMessage(
          "Error connecting to backend server. Data may be absent or not up to date."
        );
        console.error(err);
      });
  });

  return <div>you are home</div>;
}
