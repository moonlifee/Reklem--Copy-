import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import foo from './navimg/logo 1 (Traced).png'
import { FaInstagram, FaRegUser } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

function Footer() {
  return (
    <div>
      <div className="wrappper_box container">
        <div>
          <NavLink className='img'>
            <img src={foo} alt="...." />

          </NavLink>
        </div>
        <div className="container  footer">

          <div className="footer_box flex_box">

            <div className="footer_links flex_box">

              <ul >
                <li><NavLink>О компании</NavLink></li>
                <li><NavLink to={'Portfolio'}  >Портфолио</NavLink></li>
                <li><NavLink>Вакансии</NavLink></li>
                <li><NavLink>Диллерам</NavLink></li>
                <li><NavLink>Гарантия</NavLink></li>
              </ul>
              <ul>
                <li><NavLink>Контакты</NavLink></li>
                <li><NavLink>Акции</NavLink></li>
                <li><NavLink>Производство</NavLink></li>
                <li><NavLink>Доставка и оплата</NavLink></li>
                <li><NavLink>Обмен и возврат</NavLink></li>

              </ul>
              <ul>
                <li><NavLink>Услуги</NavLink></li>
                <li><NavLink>Шелкография</NavLink></li>
                <li><NavLink>Тампопечать</NavLink></li>
                <li><NavLink>Гравировка</NavLink></li>
                <li><NavLink>Печать на сумках</NavLink></li>

              </ul>

              <ul>
                <li><NavLink>Гравировка</NavLink></li>
                <li><NavLink>Тиснение</NavLink></li>
                <li><NavLink>Клише</NavLink></li>
                <li><NavLink>Полноцветная печать</NavLink></li>
              </ul> <ul>
                <li><NavLink>Полимерная заливка</NavLink></li>
                <li><NavLink>Услуги дизайнера</NavLink></li>
                <li><NavLink>Запись на USB</NavLink></li>

              </ul>
            </div>
          </div>
          <div className="filter_box2">
            <li><NavLink>Каталог</NavLink></li>
            <div className="line"></div>
          </div>

          <div className="fiiter_box">
            <div className="footer_links flex_box">

              <ul>

                <li><NavLink>Аксессуары</NavLink></li>
                <li><NavLink>Текстиль</NavLink></li>

              </ul>
              <ul>

                <li><NavLink>Флеш-карты</NavLink></li>
                <li><NavLink>Xiaomi</NavLink></li>

              </ul>
              <ul>

                <li><NavLink>Умные Кружки</NavLink></li>
                <li><NavLink>Внешник накопители</NavLink></li>

              </ul>
              <ul>

                <li><NavLink>Канцелярия</NavLink></li>
                <li><NavLink>Упаковка</NavLink></li>

              </ul>
              <ul>

                <li><NavLink>Праздники</NavLink></li>
                <li><NavLink>Остальные события</NavLink></li>

              </ul>
            </div>

          </div>
        </div>
      </div>
      <hr />
      <div className="footer_bottom_box container">
        <div className="bottom_footer_1">
          <div className='footer_icon flex-wrap g-[28px]'>
            <NavLink ><FaInstagram className=' w-6' /></NavLink>
            <NavLink > <LuFacebook /></NavLink>
            <NavLink><FiYoutube /></NavLink>
          </div>
          <div className="navigation_box">
            <h4>Москва</h4>
            <span>+7 (945) 133-16-28</span>
          </div>
          <div className="navigation_box">
            <h4>Улан-Удэ</h4>
            <span>+7 (925) 272-83-08</span>
          </div>
          <div className="navigation_box">
            <div className="navib_icon_box"> <FaRegUser /> <NavLink> Личный кабинет</NavLink></div>
            <br />
            <span>info@reklem.ru</span>
          </div><div className="navigation_box">
            <div className="navib_icon_box"> <IoDocumentTextOutline /> <NavLink> Обработка данных</NavLink></div>
            <br />
            <span>© Copyright 2021</span>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Footer