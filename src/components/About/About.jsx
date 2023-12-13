import './About.css'
import bigFoot from '../../images/big foot.png'
import {useTranslation} from 'react-i18next'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const About = () =>{
  const [t, i18n]= useTranslation("global")
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const aboutTextAnimation = {
    hidden: {  x:-300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  const aboutImageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return(
    <>
    <div id='about' className="about-container">
      <div className="about-info">
        <motion.h3 className='box about-title'
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={aboutTextAnimation}
          transition={{duration:1}}
        >
            {t("about.title1")} <span>{t("about.title2")}</span>
        </motion.h3>
        <motion.p className='box about-text'
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={aboutTextAnimation}
        transition={{duration:1, delay: 1}}
        >
        {t("about.text1")}<br></br><br></br>
        {t("about.text2")}<br></br><br></br>
        {t("about.text3")}

        </motion.p>
      </div>
      <motion.div className="fox steve-container"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={aboutImageAnimation}
      transition={{duration:1, delay:1}}>
        <img loading='lazy' src={bigFoot} alt="" className=" frase"/>
      </motion.div>
    </div>
    </>
  )
}

export default About
