import React from 'react';
import NavBar from './NavBar';
import '../styles/Home.scss';

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <NavBar
                    currentPage='home'
                />
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;