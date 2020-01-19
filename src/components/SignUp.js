import React from 'react';
import firebase from 'firebase';
import { Redirect, Link } from 'react-router-dom';
import '../styles/SignUp.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            signUpSuccess: false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ signUpSuccess: true });
            }
        });
    }

    signUp = e => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((e) => {
                console.log('error: sign up failed!');
            });
    }

    render() {
        return (
            <div className='sign-up-container'>
                {this.state.signUpSuccess && <Redirect to='/ProfileForm' />}
                <h2>First, create an account!</h2>
                <form onSubmit={this.signUp}>
                    <label>
                        Username:
                    </label>
                    <br />
                    <input
                        required
                        type='text'
                        name='name'
                        placeholder='Jane Doe'
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <br />
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
                    <button type='submit'>
                        Sign up
                    </button>
                    <h3>Already have an account? &nbsp;
                        <Link to='/'>
                            Sign in!
                        </Link>
                    </h3>
                </form>
            </div>
        );
    }
}

export default SignUp;
