import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";//Hacer npm install para usarlo

import ReactDOM from 'react-dom';
import './style/index.css';
import Profile from './components/Profile';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Details from './components/Details';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogIn />}></Route>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path='/profile/game/:id' element={<Details/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

