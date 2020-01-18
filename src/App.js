import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Forum from './components/Forum';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={SignIn} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/Home' component={Home} />
        <Route path='/Forum' component={Forum} />
        <Route path='/Profile' component={Profile} />
      </Router>
    </div>
  );
}

export default App;
