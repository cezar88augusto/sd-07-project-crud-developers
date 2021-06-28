import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Index, Select, Insert, Update, Delete } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/select" component={Select} />
      <Route exact path="/insert" component={Insert} />
      <Route exact path="/update" component={Update} />
      <Route exact path="/delete" component={Delete} />
    </Switch>
  );
}

export default App;
