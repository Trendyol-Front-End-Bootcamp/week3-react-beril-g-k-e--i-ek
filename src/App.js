import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import CharacterProfilePage from './components/CharacterProfilePage';
import { BrowserRouter as  Router, Switch, Route } from "react-router-dom";

function App() {
 
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/characters/:id" component={CharacterProfilePage} /> 
      </Switch>
      </div>
    </Router >
  );
}

export default App;
