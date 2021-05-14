import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.scss";

import { getAllSongs } from "./utils/graphql/Queries";
import { SongType } from "./models/SongType";
import { ERROR_MESSAGES } from "./models/ErrorType";
import { client } from "./utils/graphql/Client";

import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import ErrorMessage from "./components/ErrorMessage";

import NavBar from "./components/NavBar";
import AccountPage from "./pages/AccountPage/AccountPage";
import SongPage from "./pages/SongPage/SongPage";

function App() {
  const [errorMessage, setErrorMessage] = useState<ERROR_MESSAGES>(
    ERROR_MESSAGES.CLEAR
  );
  const [catalog, setCatalog] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(true);
  const { error, data } = useQuery(getAllSongs, { client });

  useEffect(() => {
    if (data) {
      setLoading(false);
      console.log("Connected to backend server successfully");
      setCatalog(data.getSongs);

      console.log(data);
    }
    if (error) {
      setErrorMessage(ERROR_MESSAGES.FAILED_LOAD_DATA);
    }
  }, [data, error, setErrorMessage]);

  return (
    <Router>
      <CssBaseline />
      <div className="wrapper">
        <Switch>
          <Route exact path="/catalog">
            <CatalogPage songs={catalog} loading={loading} />
          </Route>
          <Route path="/song/:madeFamousBy/:title">
            <SongPage songs={catalog} loading={loading} />
          </Route>
          <Route exact path="/account">
            <AccountPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        {errorMessage && errorMessage.length > 0 ? (
          <ErrorMessage
            setErrorMessage={setErrorMessage}
            message={errorMessage}
          />
        ) : (
          ""
        )}
      </div>
      <NavBar />
    </Router>
  );
}

export default App;
