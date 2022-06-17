import React, {useState} from 'react';
import { UserContext } from './Context/UserContext';
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

// react-router
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

// toast
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// components
import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import PageNotFound from "./Pages/PageNotFound"
import Footer from "./Layout/Footer"
import Header from './Layout/Header';

import firebaseConfig from './Config/firebaseConfig';
// init firebase
firebase.initializeApp(firebaseConfig)

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user, setUser}}>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
