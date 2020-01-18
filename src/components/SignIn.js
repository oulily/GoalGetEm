import React from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            signInSuccess: false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ signInSuccess: true }, () => console.log('hi!'));
            }
        });
    }

    signIn = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((e) => {
                console.log('error: sign in failed!');
            });
    }

    render() {
        return (
            <div>
                {this.state.signInSuccess && <Redirect to='/Home' />}
                <h1>Sign in.</h1>
                <form onSubmit={this.signIn}>
                    <label>
                        email:
                    </label>
                    <input
                        required
                        type='email'
                        name='email'
                        placeholder='janedoe@email.com'
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <br />
                    <label>
                        password:
                    </label>
                    <input
                        required
                        type='password'
                        name='password'
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <br />
                    <button type='submit'>
                        Sign in
                    </button>
                </form>
            </div>
        );
    }

}

export default SignIn;