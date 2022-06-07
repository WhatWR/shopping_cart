import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import { QueryClient, QueryClientProvider } from 'react-query'


const client = new QueryClient()

const App = () => (
  <QueryClientProvider client={client}>
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
  </QueryClientProvider>
);

export default App;
