// Importing necessary styles and Firebase modules
import "./App.css";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Importing specific functions from the 'firebase/app' module
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Importing components and utilities from external sources
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import { Toaster } from "react-hot-toast";

// Configuration object containing Firebase API keys and other details
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Main component representing the entire application
function App() {
  // Initializing the Firebase app with the provided configuration
  const app = initializeApp(firebaseConfig);

  // Retrieving the authentication instance from the Firebase app
  getAuth(app);

  return (
    <div className="App">
      {/* Toaster component for displaying toast notifications */}
      <Toaster />

      {/* Routing configuration using react-router-dom */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
