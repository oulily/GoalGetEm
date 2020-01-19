import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Forum from './components/Forum';
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      username: '',
      email: ''
    };
  }

  setUserID = (id) => {
    this.setState({ user_id: id });
  }

  setUsername = (name) => {
    this.setState({ username: name });
  }

  setEmail = (email) => {
    this.setState({ email: email });
  }

  setUrl = (url) => {
    this.setState({ url: url });
  }

  setGoal = (goal) => {
    this.setState({ goal: goal });
  }
  setBio = (bio) => {
    this.setState({ bio: bio });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={SignIn} />
          <Route path='/SignUp' render={(props) => <SignUp {...props} setUserID={this.setUserID} setUsername={this.setUsername} setEmail={this.setEmail} />} />
          <Route path='/ProfileForm' render={(props) => <ProfileForm {...props} userID={this.state.user_id} username={this.state.username} email={this.state.email}
            image={this.setImage} goal={this.setGoal} />} />
          <Route path='/Home' render={(props) => <Home {...props} />} />
          <Route path='/Forum' render={(props) => <Forum {...props} />} />
          <Route path='/Profile' render={(props) => <Profile {...props} userID={this.state.user_id} username={this.state.username} email={this.state.email} image={this.state.url} goal={this.state.goal} />} />
        </Router>
      </div>
    );
  }
}

export default App;
