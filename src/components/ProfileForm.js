import React from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import '../styles/ProfileForm.scss';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      image: null,
      url: '',
      goal: '',
      bio: '',
      profileFormSuccess: false
    }
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({ image: image });
    }
  };

  sendUserData = (e) => {
    e.preventDefault();
    // let uniqueId = Math.round(Math.random() * 10000);
    firebase.database().ref('/' + this.props.userID).set({
      username: this.props.username,
      email: this.props.email,
      goal: this.state.goal,
      bio: this.state.bio
    })
      .catch(e => console.log('error sending user data'))
      .then((e) => {
        this.props.setURL(this.state.url);
        this.props.setGoal(this.state.goal);
        this.props.setBio(this.state.bio);
        this.setState({ profileFormSuccess: true });
      });
  }

  handleUpload = (e) => {
    e.preventDefault();
    const uploadTask = firebase.storage().ref('/' + this.state.image.name).put(this.state.image);
    uploadTask.on(
      'state_changed',
      null,
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        firebase.storage()
          .ref('/')
          .child(this.state.image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };


  render() {
    return (
      <div className='profile-form-container' >
        {this.state.profileFormSuccess && <Redirect to='/Home' />}
        <h2>Edit Profile</h2>
        <br />
        <form onSubmit={this.sendUserData}>
          <label>
            Username:
          </label>
          <br />
          <input
            disabled
            type='text'
            name='name'
            value={this.props.username}
          // onChange={e => this.setState({ username: e.target.value })}
          />
          <br />
          <br />
          <label>
            Email:
          </label>
          <br />
          <input
            disabled
            type='email'
            name='email'
            value={this.props.email}
          // onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <br />
          <label>
            Upload Profile Picture
          </label>
          <br />
          <div className="file-field input-field">
            <div className="btn">
              <input type="file" onChange={this.handleChange} />
            </div>

          </div>
          <button
            onClick={this.handleUpload}
            className="waves-effect waves-light btn"
          >
            Upload
          </button>
          <br />
          <br />
          <img
            src={this.state.url || "https://via.placeholder.com/400x300"}
            alt="Uploaded Images"
            height="400"
            width="400"
          />
          <br />
          <br />
          <label>
            Goal:
            <br />
            <br />
            <select value={this.state.value} onChange={e => this.setState({ goal: e.target.value })}>
              <option value="Exercise">Exercise</option>
              <option value="Healthy Diet">Healthy Diet</option>
              <option value="Reading">Reading</option>
              <option value="Sudoku">Sudoku</option>
              <option value="Relationships">Relationships</option>
              <option value="Socialization">Socialization</option>
              <option value="Adademics">Adademics</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Stress Relief">Stress Relief</option>
              <option value="Eco-Friendly">Eco-Friendly</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Bio:
          </label>
          <br />
          <input
            type='bio'
            name='bio'
            placeholder=''
            onChange={e => this.setState({ bio: e.target.value })}
          />
          <br />
          <br />
          <button type='submit'>
            Save changes
          </button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
