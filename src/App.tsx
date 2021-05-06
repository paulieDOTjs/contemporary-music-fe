import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getAllSongs } from "./utils/graphql/gqlQueries";
import { client } from "./utils/graphql/apolloClient";
import { song } from "./models/song";

import HomePage from "./pages/HomePage";
import ErrorMessage from "./components/ErrorMessage";
import SongsPage from "./pages/SongsPage";

function App() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [catalog, setCatalog] = useState<song[]>([]);
  const { error, data } = useQuery(getAllSongs, { client });

  useEffect(() => {
    if (data) {
      console.log("Connected to backend server successfully");
      setCatalog(data.getSongs);
      console.log(data.getSongs);
    }
    if (error) {
      setErrorMessage("Error loading data.");
    }
  }, [data, error, setErrorMessage]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/catalog">
            <SongsPage setErrorMessage={setErrorMessage} songs={catalog} />
          </Route>
          <Route exact path="/">
            <HomePage setErrorMessage={setErrorMessage} />
          </Route>
        </Switch>
        {errorMessage ? <ErrorMessage message={errorMessage} /> : ""}
      </Router>
    </>
  );
}

export default App;
