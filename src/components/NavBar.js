import React from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

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
            <div>
                {this.state.signOutSuccess && <Redirect to='/' />}
                <button onClick={this.signOut}>logout</button>
            </div>
        );
    }
}

export default NavBar;