import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA7Lb8dwmOgZVqmRaYG50EJrZI9BsM9wTE",
  authDomain: "weight-and-balance-calculator.firebaseapp.com",
  projectId: "weight-and-balance-calculator",
  storageBucket: "weight-and-balance-calculator.appspot.com",
  messagingSenderId: "380472847102",
  appId: "1:380472847102:web:bc6439a3ca965acf55d3af",
  measurementId: "G-9235SWWY5Y"
});

const [user] = useAuthState(auth);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {user ? <SignIn /> : <SignedIn />}
      </header>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (

    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  
}

export default App;
