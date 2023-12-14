import './Gender.css'
import foto from '../../images/gender reveal.png'
import {useTranslation} from 'react-i18next'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Gender = ()=>{
  const [t, i18n]= useTranslation("global")

  const changeLng=(lng)=>{
    i18n.changeLanguage(lng)
    localStorage.setItem("lng",lng)
  }
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const genderTextAnimation = {
    hidden: {  x:-300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  const genderImageAnimation = {
    hidden: {  x:100, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  return (
    <div id='gender-reveal'>
      <div className="gender-info">
        <motion.h3 className='gender-title'
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={genderTextAnimation}
        transition={{duration:1, delay:.5}}>
        <span>{t("gender.title1")}</span> {t("gender.title2")}
        </motion.h3>

        <motion.p className='gender-text'
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={genderTextAnimation}
        transition={{duration:1, delay:1.5}}>
        {t("gender.text")}
        </motion.p>
      </div>
      <div className='foto-container'>
        <motion.img loading='lazy' src={foto} alt="fireworks" className='box fireworks-foto'
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={genderImageAnimation}
        transition={{duration:1, delay:1.5}}/>
      </div>
    </div>
  )
}
export default Gender
