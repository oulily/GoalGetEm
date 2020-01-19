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
            <div className='profile-page'>
                <NavBar
                    currentPage='profile'
                />
                {this.state.ProfileSuccess && <Redirect to='/ProfileForm' />}
                <div className = 'profile-container'>
                <h1>Profile</h1>
                <form onSubmit={e => this.setState({ ProfileSuccess: true })}>
                    <br />
                    <div className = 'username'>
                      <h2> Username: {this.props.username} </h2>
                    </div>

                    <div className = 'image'>
                      <img
                        src={this.state.url || "https://via.placeholder.com/400x300"}
                        alt="Uploaded Images"
                        height="300"
                        width="400"
                      />
                    </div>

                    <div className = 'goal'>
                      <h2>Goal: {this.props.goal} </h2>
                    </div>

                    <br />

                    <div className = 'bio'>
                    <h2> Bio: {this.props.bio} </h2>
                    </div>
                    <br/>

                    <button type='submit'>
                        Edit Profile
                    </button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
