import './Gender.css'
import foto from '../../images/gender reveal.png'
import {useTranslation} from 'react-i18next'

const Gender = ()=>{
  const [t, i18n]= useTranslation("global")

  const changeLng=(lng)=>{
    i18n.changeLanguage(lng)
    localStorage.setItem("lng",lng)
  }
  return (
    <div id='gender-reveal'>
      <div className="gender-info">
        <h3 className='gender-title'><span>{t("gender.title1")}</span> {t("gender.title2")}</h3>
        <p className='gender-text'> {t("gender.text")}
        </p>
      </div>
      <div className='foto-container'>
        <img src={foto} alt="fireworks" className='fireworks-foto' />
      </div>
    </div>
  )
}
export default Gender
