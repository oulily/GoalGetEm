import React from 'react';
import NavBar from './NavBar';
import { Redirect } from 'react-router-dom';
import '../styles/Profile.scss';

class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        other: '',
        interest: '',
        ProfileSuccess: false
      }
    }

    render() {
        return (
            <div className='profile-container'>
                <NavBar
                    currentPage='profile'
                />
                {this.state.ProfileSuccess && <Redirect to='/ProfileForm'/>}
                <h1>Profile</h1>
                <form onSubmit={e => this.setState({ ProfileSuccess: true })}>
                    <label>
                        username
                    </label>
                    <br />
                    <input
                        required
                        type='username'
                        name='username'
                        placeholder='janedoe'
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <br />
                    <label>
                        password:
                    </label>
                    <br />
                    <input
                        required
                        type='password'
                        name='password'
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <h2>Interests</h2>
                        <br/>
                        <input
                          type='other'
                          name='other'
                          placeholder='Another goal'
                          onChange={e => this.setState({ other: e.target.value })}
                        />
                    {/*<div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                            <a href="#">Exercise</a>
                            <a href="#">Socializing</a>
                            <a href="#">School</a>
                        </div>
                        </div>*/}
                    <br />
                    <input
                        type='other'
                        name='other'
                        placeholder='Another goal'
                        onChange={e => this.setState({ other: e.target.value })}
                    />
                    <h2>Bio</h2>
                    <br />
                    <input
                        required
                        type='Bio'
                        name='Bio'
                        placeholder='Brief description'
                        onChange={e => this.setState({ interest: e.target.value })}
                    />
                    <br/>

                    <button type='submit'>
                      Edit Profile
                    </button>
                </form>
            </div>
        );
    }
}

export default Profile;
