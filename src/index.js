import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
    apiKey: "AIzaSyAguhj_tWuDt4uSOMbV0xi9ruYAcxYVuP4",
    authDomain: "womxnhacks-2020.firebaseapp.com",
    databaseURL: "https://womxnhacks-2020.firebaseio.com",
    projectId: "womxnhacks-2020",
    storageBucket: "womxnhacks-2020.appspot.com",
    messagingSenderId: "835298215198",
    appId: "1:835298215198:web:12bb9489c366aecea6350f",
    measurementId: "G-ZEQ85JZ7MW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
