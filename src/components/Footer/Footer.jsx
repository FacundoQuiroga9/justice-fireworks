import './Footer.css'
import {useTranslation} from 'react-i18next'
import logo from '../../images/logo-footer.png'
import visa from '../../images/visa.png'
import mastercard from '../../images/mastercard.png'
import amex from '../../images/amex.png'


const Footer = ()=>{
  const [t, i18n]= useTranslation("global")
  return(
    <footer className='footer'>

      <div className="footer2">
      <h4 className='footer-title'>{t("footer.adress")}</h4>
        <p className='direccion footer-text'><i className="fa-solid fa-location-dot"></i> 5159 Interstate 30W, Caddo Mills TX 75135</p>
        <h4 className='footer-title'>{t("footer.phone")}</h4>
        <p className="telefono footer-text"><i className="fa-solid fa-phone"></i> (972) 977-5193</p>
        <h4 className='footer-title'><i className="fa-solid fa-laptop"></i> {t("footer.social-media")}</h4>
        <div className='social-media-container'>
          <a className='media-link' href="https://www.facebook.com/profile.php?id=61550935544961" target="_blanck">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a className='media-link' href="https://www.instagram.com/dynamite_fireworks_/" target="_blanck">
          <i className="fa-brands fa-instagram"></i>
          </a>
        </div>


      </div>
      <div className="footer1">

        <h4 className='footer-title'><i className="fa-regular fa-calendar-days"></i> {t("footer.daily")}</h4>
        <p className='footer-text'><i className="fa-solid fa-clock"></i> {t("footer.dhours")}</p>
        <p className='footer-text'>{t("footer.ddays")}</p>
        <h4 className='footer-title'><i className="fa-regular fa-calendar-days"></i> {t("footer.peak")}</h4>
        <p className='footer-text'><i className="fa-solid fa-clock"></i> {t("footer.phours")}</p>
        <p className='footer-text'>{t("footer.pdays1")}</p>
        <p className='footer-text'>{t("footer.pdays2")}</p>
        <p className='footer-text'>{t("footer.pdays3")}</p>
        <p className='footer-text'>{t("footer.pdays4")}</p>
        <p className='footer-text'>{t("footer.pdays5")}</p>
        <p className='footer-text'>{t("footer.pdays6")}</p>

      </div>
      <div className="footer3">
      <h4 className='footer-title'>{t("footer.terms-and-conditions")}</h4>
        <p className='terminos footer-text'>{t("footer.read")} <a className='aqui' href='/Terminos.pdf' target="_blanck">{t("footer.here")}</a></p>
      <h4 className='footer-title'><i class="fa-solid fa-credit-card"></i> {t("footer.payments")}</h4>
      <div className='credit-cards-container'>
        <img src={visa} className='credit-card' alt="" />
        <img src={amex} className='credit-card' alt="" />
        <img src={mastercard} className='credit-card' alt="" />
      </div>
        <img src={logo} alt="" className='logo-footer'/>
        <p className="desarrollo footer-text">{t("footer.development")} <a href="https://quirogafacundo.com" target='_blanck'><span className='fq'>FQ</span></a></p>


      </div>
    </footer>
  )
}

export default Footer
