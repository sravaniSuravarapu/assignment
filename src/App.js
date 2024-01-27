import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Main';
import Add from './components/Add';

import {Routes} from "react-router-dom"

const App = () => {
  return (
    <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/addnew" element={<Add />} />
               </Routes>
  );
};

export default App