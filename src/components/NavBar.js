import React from 'react';
import firebase from 'firebase';
import { Redirect, Link } from 'react-router-dom';
import '../styles/NavBar.scss';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signOutSuccess: false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.setState({ signOutSuccess: true });
            }
        });
    }

    signOut = event => {
        event.preventDefault();
        firebase.auth().signOut()
            .catch((e) => {
                console.log('error: sign out failed');
            });
    }

    render() {
        return (
            <div className='nav-bar-container'>
                {this.state.signOutSuccess && <Redirect to='/' />}
                <h1>WomxnHacks 2020</h1>
                <Link to='/Home' className={this.props.currentPage === 'home' ? 'current-page' : ''}><h2>Home</h2></Link>
                <Link to='/Forum' className={this.props.currentPage === 'forum' ? 'current-page' : ''}><h2>Forum</h2></Link>
                <Link to='/Profile' className={this.props.currentPage === 'profile' ? 'current-page' : ''}><h2>Profile</h2></Link>
                <button onClick={this.signOut}>logout</button>
            </div>
        );
    }
}

export default NavBar;