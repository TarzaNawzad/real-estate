import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link, Router } from "react-router-dom";
import { useTranslation } from 'react-i18next';




const Header = () => {
  const [navList, setNavList] = useState(false)

  const {  i18n } = useTranslation();

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'> 

          

              <span>2</span> 
              
             <i class="fa-solid fa-basket-shopping"></i> 

          

         
            <button onClick={()=>i18n.changeLanguage('ku')}>کوردی</button>
            <button onClick={()=>i18n.changeLanguage('Eng')}>Eng</button>
            <button onClick={()=>i18n.changeLanguage('Ar')}>عربی</button>

            <i class="fa-solid fa-tent-arrow-left-right"></i> Lang
           
           
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
