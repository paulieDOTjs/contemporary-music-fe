import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./HomePage.scss";

import { setErrorMessageType } from "../models/stateTypes";

export default function HomePage(props: {
  setErrorMessage: setErrorMessageType;
}) {
  return (
    <div className="HomePage">
      <h1>Modern Masters</h1>
      <h2>Suggested Songs for Contemporary Voice Study</h2>
      <Link to="/catalog">
        <Button size="large" variant="contained" color="secondary">
          View Catalog
        </Button>
      </Link>
    </div>
  );
}
