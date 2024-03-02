import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
        <nav id="navber">
    <div class="container">
      <div class="nav_wrapper">
        <div class="logo">
          <a href="">
            <picture>
              <img src="./images/logo1.png" alt="no_found"/>
            </picture>
          </a>
        </div>
        <div class="menu">
          <ul>
             <Link to={"/"}>Home</Link>
  
             <Link to={"About"}>About</Link>
             <Link to={"Activites"}>Activites<i class="fa-solid fa-angle-down"></i>
             <ul class="dropdown">
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
               </ul>
             </Link>
             <Link to={"LatetstNews"}>Latetst News</Link>
             <Link to={"LatetstNews"}>News</Link>

          </ul>
        </div>
        <div class="nav_btn">
           <a href="#" class="common_btn">get started<i class="fa-solid fa-angle-right"></i></a>
        </div>
      </div>
     </div>
  </nav>


  )
}

export default Navbar