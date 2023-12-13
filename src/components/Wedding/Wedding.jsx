import './Wedding.css'
import Carousel from "../Carousel/Carousel";
import {useTranslation} from 'react-i18next'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

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
    <div id='wedding' className="wedding-section">
      <Carousel />
      <div className="wedding-info">
        <h3 className="wedding-title">Wedding Sparklers</h3>
        <p className="wedding-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cupiditate eaque a, perspiciatis modi unde corrupti nisi doloribus rem eligendi!</p>
      </div>
    </div>
  )
}

export default Wedding
