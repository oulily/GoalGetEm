import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import SignIn from './components/SignIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={SignUp} />
        <Route path='/Home' component={Home} />
        <Route path='/SignIn' component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
