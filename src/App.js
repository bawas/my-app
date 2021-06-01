import React from 'react';
import ApolloWrapperProvider from './apollo/provider';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  return (
    <ApolloWrapperProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </ApolloWrapperProvider>
  );
};

export default App;
