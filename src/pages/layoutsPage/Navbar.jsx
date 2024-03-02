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
             <Link className={"link-styles"} to={"/"}>Home</Link>
             <Link className={"link-styles"} to={"/About"}>About</Link>
             <li className={"link-styles"} to={"/Activites"}>Activites<i class="fa-solid fa-angle-down"></i>

                 <ul class="dropdown">
                    <li>Home</li>
                    <Link className={"styles"}>Home</Link>    
                    <Link className={"styles"}>Home</Link>      
                    <Link className={"styles"}>Home</Link>        
                    <Link className={"styles"}>Home</Link> 
                      
                </ul>  
             </li>
             <Link className={"link-styles"} to={"/News"}>Latetst News</Link>
             <Link className={"link-styles"} to={"/Contact"}>Contact</Link>

  

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