
import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
const Navbar=()=>{

    return (
      <div>
        <nav className=" fixed-top navbar navbar-expand-lg" style={{background:"#b3b3ff"}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" style={{fontWeight:"bold"}}>NEWS CART</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/bussiness" >Bussiness</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/entertainment" >Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/general" >General</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/health" >Health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/science" >Science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/story" >Story</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/technology" >Technology</NavLink>
        </li>
      </ul>
    </div>
    <div className="d-flex">
      <button className="btn btn-primary d-flex justify-content-center">
      <a className=" d-flex justify-content-center m-0" href='https://agarwalvidu.github.io/VidushiAgarwal_portfolio/' style={{color:"white",textDecoration:"none"}}>About</a>
      </button>
    
    </div>
  </div>
</nav>
      </div>
    )
}

export default Navbar