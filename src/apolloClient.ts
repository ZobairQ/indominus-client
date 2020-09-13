import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "same-origin",
});
const authLink = setContext((_, { headers }) => {
  console.log("this is from apollo client", localStorage);
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token"),
    },
  };
});
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});
