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
    hidden: {  x:-300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  return(
    <div id='wedding' className='wedding'>
      <Carousel />
      <div className="wedding-info">
        <h3 className="wedding-title"><span>{t("wedding.title1")}</span> {t("wedding.title2")}</h3>
        <p className="wedding-text">{t("wedding.text")}</p>
        <Button><a href='https://www.dallassparklers.com/' target='_blank' rel="noreferrer">DallasSparklers.com</a></Button>
      </div>
    </div>
  )
}

export default Wedding
