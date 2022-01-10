import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyCXxSfRScaKIbhhss0bft20jUyn5ZkHdLg",
    authDomain: "chat-react-2ef81.firebaseapp.com",
    projectId: "chat-react-2ef81",
    storageBucket: "chat-react-2ef81.appspot.com",
    messagingSenderId: "1013290985549",
    appId: "1:1013290985549:web:0893d91f557dc239c79404",
    measurementId: "G-LBM0YW0YS5"
});


export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(

  <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
    <App />
    </Context.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

