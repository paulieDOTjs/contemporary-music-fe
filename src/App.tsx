import { ApolloProvider } from "@apollo/client";

import { client } from "./apollo/apolloClient";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  );
}

export default App;
