import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// Components
import BookList from "./components/BookList";

// Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:8080/graphql", 
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Book List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
