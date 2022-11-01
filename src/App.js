import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <>
    <Routes>
    <Route path='/' exact element={<Header></Header>}></Route>
    <Route path='/header' element={<Header></Header>}></Route>
    <Route path='/home' element={<ProtectedRoute><Home></Home></ProtectedRoute>}></Route>
    </Routes>
   
    
    </>
  );
}

export default App;
