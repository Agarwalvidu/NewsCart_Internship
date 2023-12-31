import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  const [progress, setProgress] = useState(0)
    return (
      <div>
         <LoadingBar
        color='#f11946'
        height={5}
        progress={progress}
      />
        <Navbar/>
        <Routes>
          <Route exact  path='/' element={<News setProgress={setProgress} key="general" pageSize={6} country="in" category="general"/>}/>
          <Route exact  path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
          <Route exact  path='/bussiness' element={<News setProgress={setProgress} key="bussiness" pageSize={6} country="in" category="bussiness"/>}/>
          <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={6} country="in" category="general"/>}/>
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={6} country="in" category="health"/>}/>
          <Route exact path='/science' element={<News setProgress={setProgress}  key="science" pageSize={6} country="in" category="science"/>}/>
          <Route exact path='/story' element={<News setProgress={setProgress} key="story" pageSize={6} country="in" category="story"/>}/>
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={6} country="in" category="technology"/>}/>
        </Routes>
        <footer>
        <div class="footer">
            <div class="footer-first">
                <h3>NEWS CART</h3>
            </div>
            <div class="footer-fourth">
                <ul style={{display:"flex"}}>
                    <li>My Contact Details:</li>
                    <li>Name: Vidushi Agarwal</li>
                    <li>Contact No: 8958898580</li>
                    <li>Email: vidushiagg2004@gmail.com</li>
                    <li>Address: Delhi</li>
                </ul>
            </div>
        </div>
        <div class="footer-rights">
            copyright &#169; vidushisportfolio.com | All Rights Reserved | Terms & Conditions applied
        </div>
    </footer>
      </div>
    )
}
export default App;
