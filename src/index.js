import React from 'react';
import ReactDOM from 'react-dom/client';  // Import createRoot for React 18
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';


import 'antd/dist/reset.css';  


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
     
        <App />
     
    </Router>
  </React.StrictMode>
);
