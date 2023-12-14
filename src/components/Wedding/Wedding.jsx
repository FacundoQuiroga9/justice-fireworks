import './Wedding.css'
import Carousel from "../Carousel/Carousel";
import {useTranslation} from 'react-i18next'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import Button from '../Button/Button'

const Wedding = () => {
  const [t, i18n]= useTranslation("global")

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const weddingTitleAnimation = {
    hidden: {  x:100, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  const weddingTextAnimation = {
    hidden: {  opacity:0},
    visible: { opacity: 1 },
  };
  return(
    <div id='wedding' className='wedding'>
      <Carousel />
      <div className="wedding-info">
        <motion.h3 className="wedding-title"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={weddingTitleAnimation}
        transition={{duration:1, delay:.5}}>
          <span>{t("wedding.title1")}</span> {t("wedding.title2")}
        </motion.h3>
        <motion.p className="wedding-text"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={weddingTextAnimation}
        transition={{duration:1, delay:1}}>
          {t("wedding.text")}
        </motion.p>
        <Button><a href='https://www.dallassparklers.com/' target='_blank' rel="noreferrer">DallasSparklers.com</a></Button>
      </div>
    </div>
  )
}

export default Wedding
