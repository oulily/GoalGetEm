import React from 'react';
import firebase from 'firebase';
import { Redirect, Link } from 'react-router-dom';
import '../styles/SignIn.scss';

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
                this.setState({ signInSuccess: true });
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
            <div className='sign-in-container'>
                {this.state.signInSuccess && <Redirect to='/Home' />}
                <h1>GoalGetEm!</h1>
                <br />
                <form onSubmit={this.signIn}>
                    <label>
                        Email:
                    </label>
                    <br />
                    <input
                        required
                        type='email'
                        name='email'
                        placeholder='janedoe@email.com'
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <br />
                    <br />
                    <label>
                        Password:
                    </label>
                    <br />
                    <input
                        required
                        type='password'
                        name='password'
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <br />
                    <br />
                    <button type='submit'>
                        Sign in
                    </button>
                    <br />
                    <h3>New user? &nbsp;
                        <Link to='/SignUp'>
                            Sign up!
                        </Link>
                    </h3>
                </form>
            </div>
        );
    }

}

export default SignIn;
