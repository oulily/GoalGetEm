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
                <div className='profile-container'>
                    <h2>My Profile</h2>
                    <form onSubmit={e => this.setState({ ProfileSuccess: true })}>
                        <br />
                        <div className='heading'>
                            <label> Username: {this.props.username} </label>
                        </div>
                        <br />
                        <br />

                        <div>
                            <img
                                src={this.props.url || "https://via.placeholder.com/400x300"}
                                alt="Uploaded Images"
                                height="400"
                                width="400"
                            />
                        </div>
                        <br />
                        <br />

                        <div className='heading'>
                            <label> Goal: {this.props.goal} </label>
                        </div>

                        <br />
                        <br />

                        <div className='heading'>
                            <label> Bio: {this.props.bio} </label>
                        </div>
                        <br />
                        <br />

                        <button type='submit'>
                            Edit Profile
                    </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Profile;
