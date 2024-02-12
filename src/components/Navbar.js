import React from 'react'
import './navbar.css'
import logo from './navimg/logo 1 (Traced).png'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
function Navbar() {
  return (
    <div>
        <div className="container ">
            <div className="navbar">
                <div className="img_box">
                      <NavLink to={"/"}><img src={logo} alt="..." /></NavLink>
                </div>
                
                <div className="Navlink_box">
                    <ul className='flex-box flex-auto justify-around'>
                          <div className="dropdown_box">
                              <FaBars />
                          </div>
                        <li>
                              <NavLink>О компании</NavLink>
                        </li>
                          <li>
                              <NavLink>Каталог</NavLink>
                          </li>
                          <li>
                              <NavLink>Акции</NavLink>
                          </li>
                          <li>
                              <NavLink>Услуги</NavLink>
                          </li>
                          <li>
                              <NavLink>Контакты</NavLink>
                          </li>
                          <li>
                              <NavLink><IoSearch /></NavLink>
                          </li>
                    </ul>
                </div>
                <div className="user_box ">
                      <div className=' flex-wrap g-[28px]'> <NavLink><FaRegUser /></NavLink>
                          <NavLink><SlBasketLoaded /></NavLink></div>
                    <div className="editor_box">
                          <NavLink><SlBasketLoaded /></NavLink>
                    </div>

                      
                </div>

            </div>

        </div>
        

    </div>
  )
}

export default Navbar