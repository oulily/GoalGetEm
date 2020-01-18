import React from 'react';
import NavBar from './NavBar';
import '../styles/Profile.scss';

class Profile extends React.Component {
    render() {
        return (
            <div className='profile-container'>
                <NavBar
                    currentPage='profile'
                />
                <h1>Profile</h1>
            </div>
        );
    }
}

export default Profile;