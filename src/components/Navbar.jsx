import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Logo from '../assests/logo.png'
import Bookmark from '../assests/bookmark_black_24dp 1.png'
import cart from '../assests/Product 3.png'
import Bell from '../assests/notifications_black_24dp 1.png'
import Explore from '../assests/Explore.png'
import Hobbies from '../assests/Hobbies.png'
import search from '../assests/icons8_search 1.png'
import '../app.css'

function Navbar() {
  return (
    <>
 <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
  <a class="navbar-brand " href="#"><img src={Logo} class="img-fluid logo" alt="logo"></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse padding " id="navbarNav">
  <form class="d-flex" role="search">
  <div class="srch d-flex ">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <div><img src={search} class="img-fluid" alt="search" width={24} height={24}></img></div>
        </div>
      </form>
    <ul class="navbar-nav ">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={Explore} class="img-fluid" alt="Explore"></img>Explore
          </a>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul></li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={Hobbies} class="img-fluid" alt="Hobbies"></img>Hobbies
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul></li>
    <li class="nav-item">
        <a class="nav-link" href="#"><img src={Bookmark} class="img-fluid" alt="Bookmark"></img></a>
      </li>
        
      <li class="nav-item">
        <a class="nav-link" href="#"><img src={Bell} class="img-fluid" alt="Bell"></img></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><img src={cart} class="img-fluid" alt="cart"></img></a>
      </li>
    </ul>
    <button type="button" class="btn custom-btn">sign up</button>
  </div>
</nav>
    </>
  )
}

export default Navbar