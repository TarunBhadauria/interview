import './App.css';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

function App() {

    const app = initializeApp(firebaseConfig)

    getAuth(app);

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </div>
    );
}

export default App;
