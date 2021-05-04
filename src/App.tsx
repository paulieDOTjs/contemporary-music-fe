import { ApolloProvider } from "@apollo/client";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { client } from "./utils/graphql/apolloClient";

import HomePage from "./pages/HomePage";
import ErrorMessage from "./components/ErrorMessage";
import SongsPage from "./pages/SongsPage";

function App() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/catalog">
            <SongsPage setErrorMessage={setErrorMessage} />
          </Route>
          <Route exact path="/">
            <HomePage setErrorMessage={setErrorMessage} />
          </Route>
        </Switch>
      </Router>
      {errorMessage ? <ErrorMessage message={errorMessage} /> : ""}
    </ApolloProvider>
  );
}

export default App;
