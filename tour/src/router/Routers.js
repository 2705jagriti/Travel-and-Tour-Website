import React from 'react'
import {Routers , Route , Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';


const Routers = () => {
  return (
    <Routes>
      < Route path = '/' element ={< Navigate to = '/home'/>}/>
      <Route path = '/home' element={<home/>} />
    </Routes>
  )
}

export default Routers
