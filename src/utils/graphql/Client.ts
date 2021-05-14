import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { ENDPOINT } from "../../config/ENDPOINT";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((gqlError) => console.error(gqlError));
  }
  if (networkError) {
    console.error(networkError);
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: ENDPOINT.BASE_URL + ENDPOINT.GRAPHQL }),
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
