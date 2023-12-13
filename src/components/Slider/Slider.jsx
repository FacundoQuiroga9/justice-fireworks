import './Slider.css'
import Cutting from '../../images/CUTTING EDGE.png'
import BlackCat from '../../images/Black Cat.png'
import Brothers from '../../images/BROTHERS.gif'
import Winda from '../../images/WINDA.png'
import Raccoon from '../../images/Raccoon.png'
import Monkey from '../../images/monkey.png'
import Tsky from '../../images/tsky.png'
import WCF from '../../images/wcf.png'
import Boom from '../../images/boom.png'
import dibujo from '../../images/Dibujo Dynamite building.png'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Slider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const brandsBuildingAnimation = {
    hidden: {  x:300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  const brandsSliderAnimation = {
    hidden: {  opacity:0 },
    visible: { opacity: 1 },
  };
  return(
    <>
      <motion.img loading='lazy' id='brands' className='box dibujo' src={dibujo} alt=""
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={brandsBuildingAnimation}
      transition={{duration:2, delay: .5}}/>

      <motion.div className="logos"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={brandsSliderAnimation}
      transition={{duration:2, delay: 1}}
      >
      <div className="logos-slider">
        <img src={Cutting} />
        <img src={BlackCat} />
        <img src={Winda} />
        <img src={Tsky} />
        <img src={Monkey} />
        <img src={Raccoon} />
        <img src={WCF} />
        <img src={Brothers} />
        <img src={Boom} />
        <img src={Cutting} />
        <img src={BlackCat} />
        <img src={Winda} />
        <img src={Tsky} />
        <img src={Monkey} />
        <img src={Raccoon} />
        <img src={WCF} />
        <img src={Brothers} />
        <img src={Boom} />
      </div>
    </motion.div>
    </>
  )
}

export default Slider
