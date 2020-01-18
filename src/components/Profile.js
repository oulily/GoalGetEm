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
                
                       
                    
            </div>
        );
    }
}

export default Profile;