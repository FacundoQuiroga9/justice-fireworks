import './Navbar.css'
import Logo from '../Logo/Logo'
import usFlag from '../../images/us-flag.svg'
import mxFlag from '../../images/mx-flag.svg'
import { useState } from 'react'
import {useTranslation} from 'react-i18next'

const Navbar = ()=>{
  const [menu, setMenu]= useState(false)
  const [classSpan, setClassSpan] = useState(false)
  const openMenu = ()=>{
    setMenu(!menu)
    setClassSpan(!classSpan)
  }

  const [t, i18n]= useTranslation("global")

  const changeLng=(lng)=>{
    i18n.changeLanguage(lng)
    localStorage.setItem("lng",lng)
  }
  return(
    <header className="header">
      <div className='logo-button-container'>
        <Logo />
        <button className='header-button' onClick={openMenu}>
          <span className={`top-line-${classSpan ? "clicked": "unclicked"}`}></span>
          <span className={`middle-line-${classSpan ? "clicked": "unclicked"}`}></span>
          <span className={`bottom-line-${classSpan ? "clicked": "unclicked"}`}></span>
        </button>
      </div>
        <nav className={`header-nav ${menu ? "active": ""}`}>
          <ul className="header-ul">
            <li className="header-li" onClick={openMenu}><a href='#' className='header-a'>{t("navbar.home")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='#' className='header-a'>{t("navbar.about")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='#' className='header-a'>{t("navbar.brands")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='#' className='header-a'>{t("navbar.gender-reveal")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='https://www.dallassparklers.com/' target="_blanck" className='header-a'>{t("navbar.wedding-sparklers")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='#' className='header-a'>{t("navbar.contact")}</a></li>
            <ul className='flags'>
              <li className="flag-li" onClick={()=>changeLng("en")}><img src={usFlag} alt="en" className='flag' /></li>
              <li className="flag-li" onClick={()=>changeLng("es")}><img src={mxFlag} alt="es" className='flag' /></li>
            </ul>
          </ul>
        </nav>

    </header>
  )
}

export default Navbar
