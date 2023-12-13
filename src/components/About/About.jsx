import './About.css'
import steve from '../../images/steve.jpg'
import bigFoot from '../../images/big foot.png'
import {useTranslation} from 'react-i18next'
import { motion } from "framer-motion"

const About = () =>{
  const [t, i18n]= useTranslation("global")
  return(
    <>
    <div id='about' className="about-container">
      <div className="about-info">
        <motion.h3 className='box about-title'
          initial= {{ opacity:0}}
          animate={{ opacity:1}}
          transition={{duration:2}}
        >
            {t("about.title1")} <span>{t("about.title2")}</span>
        </motion.h3>
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
