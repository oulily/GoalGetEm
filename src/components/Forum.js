import React from 'react';
import NavBar from './NavBar';
import '../styles/Forum.scss';

class Forum extends React.Component {
    render() {
        return (
            <div className='forum-container'>
                <NavBar
                    currentPage='forum'
                />
                <h1>Forum</h1>
            </div>
        );
    }
}

export default Forum;