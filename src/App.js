import './App.css';
import React from 'react';
import Homepage from './components/HomePage/Homepage';
import CharacterCard from './components/CharacterDetailPage/CharacterDetailCard';
import { BrowserRouter as  Router, Switch, Route } from "react-router-dom";

function App() {
 
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/characters/:id" component={CharacterCard} /> 
      </Switch>
      </div>
    </Router >
  );
}

export default App;
