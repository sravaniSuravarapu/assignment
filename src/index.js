import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Listing from './components/Listing';
import Addnew from './components/Addnew';
import Testimonals from './components/Testimonals';
import Explore from './components/Explore';
import Footer from './components/Footer';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);






