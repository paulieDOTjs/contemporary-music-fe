import { useEffect } from "react";
import { ENDPOINT } from "../config/ENDPOINT";

export default function HomePage() {
  useEffect(() => {
    // Update the document title using the browser API
    fetch(ENDPOINT.BASE_URL, { mode: "no-cors" })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });
  return <div>you are home</div>;
}
