import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import Home from './components/Home';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql'
})

function App() {
  return (

    <ApolloProvider client={client}>
    <div className="App">
      
      <Home/>
    </div>

    </ApolloProvider>
  );
}

export default App;
