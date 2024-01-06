// Importing React and ReactDOM for rendering the application
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// Importing BrowserRouter for client-side routing
import { BrowserRouter } from 'react-router-dom';

// Creating a React root to enable concurrent rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
