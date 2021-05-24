import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="HomePage">
      <header>
        <h1>NewTune</h1>
        <h2>Suggested Songs for Contemporary Voice Study</h2>
      </header>
      <section>
        <Link to="/catalog">
          <Button variant="contained" color="secondary">
            View Catalog
          </Button>
        </Link>
      </section>
    </div>
  );
}
