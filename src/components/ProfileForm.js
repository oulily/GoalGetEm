import React from 'react';
import firebase from 'firebase';
import { Redirect, Link } from 'react-router-dom';
import '../styles/ProfileForm.scss';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      this.setState(() => ({ image }));
    }
  };

  // handleUpload = () => {
  //   const { image } = this.state;
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     error => {
  //       // Error function ...
  //       console.log(error);
  //     },
  //     () => {
  //       // complete function ...
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then(url => {
  //           this.setState({ url });
  //         });
  //     }
  //   );
  // };

  render() {
    return (
      <div className='profile-form-container' >
        {this.state.profileFormSuccess && <Redirect to='/Home ' />}
        <h2>Edit your profile</h2>
        <form onSubmit={() => this.setState({ profileFormSuccess: true })}>
          <label>
            username:
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
            email:
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
          {/* <div className="center">
            <br />
            <h2 className="green-text">React Firebase Image Uploader</h2>
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
          </div> */}
          <br />
          <label>
            goal:
          </label>
          <br />
          <input
            required
            type='goal'
            name='goal'
            placeholder='goal'
            onChange={e => this.setState({ goal: e.target.value })}
          />
          <br />
          <label>
            bio:
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
