import './About.css'
import steve from '../../images/steve.jpg'
import bigFoot from '../../images/big foot.png'
import {useTranslation} from 'react-i18next'

const About = () =>{
  const [t, i18n]= useTranslation("global")
  return(
    <>
    <div id='about' className="about-container">
      <div className="about-info">
        <h3 className='about-title'>{t("about.title1")} <span>{t("about.title2")}</span></h3>
        <p className='about-text'>
        {t("about.text1")}<br></br><br></br>
        {t("about.text2")}<br></br><br></br>
        {t("about.text3")}

        </p>
      </div>
      <div className="steve-container">
      <img src={bigFoot} alt="" className="frase" />
      </div>
    </div>
    </>
  )
}

export default About
