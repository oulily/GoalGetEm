import React from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import '../styles/ProfileForm.scss';
import storage from 'firebase';

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
      this.setState({image : image });
    }
  };

  sendUserData = (e) => {
    e.preventDefault();
    let uniqueId = Math.round(Math.random() * 10000);
    firebase.database().ref('/' + uniqueId).set({
      username: this.state.username,
      email: this.state.email,
      goal: this.state.goal,
      bio: this.state.bio
    })
      .catch(e => console.log('error sending user data'))
      .then((e) => {
        this.setState({ profileFormSuccess: true });
      });
  }

/*  updateImage = (e) => {
    e.preventDefault();
    firebase.storage().ref(`images/${image.name}`).put(image);

  }
*/

  handleUpload = () => {
    const { image } = this.state.image;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      null,
      null,
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
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
        <h2>Edit your profile</h2>
        <form onSubmit={this.sendUserData}>
          {/*TODO make it the same as the username entered previously*/}
          <label>
            Username:
          </label>
          <br />
          <input
            required
            type='text'
            name='name'
            placeholder='Jane Doe'
            onChange={e => this.setState({ username: e.target.value })}
          />
          <br />
          <label>
            Email:
          </label>
          <br />
          <input
            required
            type='email'
            name='email'
            placeholder='janedoe@email.com'
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />

          <h2>Profile Picture</h2>
          <br />
          <br />
          <br />
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" onChange={this.handleChange} />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
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
            height="300"
            width="400"
          />
          <br />
          {/* <button class="dropbtn">Dropdown</button>
           <div class="dropdown-content">
          //   <a href="#">Exercise</a>
          //   <a href="#">Socializing</a>
          //   <a href="#">School</a>
          // </div>
          <br/>
          */}
          <br />
          <label>
            Goal:
            <br />
            <select value={this.state.value} onChange={e => this.setState({ goal: e.target.value })}>
              <option value="Exercise">Exercise</option>
              <option value="Socializing">Socializing</option>
              <option value="School">School</option>
            </select>
          </label>
          <br />
          {/*
          <input
            required
            type='goal'
            name='goal'
            placeholder='goal'
            onChange={e => this.setState({ goal: e.target.value })}
          />
          */}
          <br />
          <label>
            Bio:
          </label>
          <br />
          <input
            type='bio'
            name='bio'
            placeholder='bio'
            onChange={e => this.setState({ bio: e.target.value })}
          />
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
