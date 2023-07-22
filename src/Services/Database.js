import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://ecommerceapp.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "tKm2IW36nxORqT26Od8Lu13jUorItTmv6rlXrZ5MG03fly2JvAiaz4z40eutgnme",
  },
});
