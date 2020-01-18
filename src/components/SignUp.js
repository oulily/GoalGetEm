import React from 'react';
import firebase from 'firebase';
import { Redirect, Link } from 'react-router-dom';

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
                {this.state.signUpSuccess && <Redirect to='/Home' />}
                <h1>Make an account</h1>
                <form onSubmit={this.signUp}>
                    <label>
                        username:
                    </label>
                    <input
                        required
                        type='text'
                        name='name'
                        placeholder='Jane Doe'
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <br />
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
                        Sign up
                    </button>
                </form>
                <h3>Already have an account?
                    <Link to='/SignIn'>
                        Sign in!
                    </Link>

                </h3>
            </div>
        );
    }
}

export default SignUp;