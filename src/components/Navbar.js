import React from 'react'
import './navbar.css'
import logo from './navimg/logo 1 (Traced).png'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { FiEdit } from "react-icons/fi";
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
                                <button type='Button' className='Button'>  <FaBars /></button>
                                <div class="dropdown">
                                    <ul>
                                        <li>Option 1</li>
                                        <li>Option 2</li>
                                        <li>Option 3</li>
                                        <li>Option 4</li>
                                    </ul>
                                </div>
                            </div>
                            <li>
                                <NavLink to={'oCompany'}>О компании</NavLink>
                            </li>
                            <li>
                                <NavLink to={'categoty'}>Каталог</NavLink>
                            </li>
                            <li>
                                <NavLink to={'aktsiya'}>Акции</NavLink>
                            </li>
                            <li>
                                <NavLink to={'uslugiya'}>Услуги</NavLink>
                            </li>
                            <li>
                                <NavLink to={'contact'}>Контакты</NavLink>
                            </li>
                            <li>
                                <NavLink><IoSearch /></NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="user_box ">
                        <div className='Nav_icon flex-wrap g-[28px]'> <NavLink to={'profile'}><FaRegUser /></NavLink>
                            <NavLink to={'basket'}><SlBasketLoaded /></NavLink></div>
                        <div className="editor_box">
                            <NavLink className=' mr-4' to={'editor'}>Конструктор   </NavLink>
                            <FiEdit />
                        </div>


                    </div>

                </div>

            </div>


        </div>
    )
}

export default Navbar