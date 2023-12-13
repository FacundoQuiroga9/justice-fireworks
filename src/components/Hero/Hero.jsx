import './Hero.css'
import Image1 from '../../images/Dynamite.jpeg';
import { motion } from "framer-motion"

const Hero = ()=> {
  return (
    <motion.img loading='lazy' src={Image1} className="box image-custom" alt="..."
    initial= {{ opacity:0}}
    animate={{ opacity:1}}
    transition={{duration:2}}

    />

  );
}

export default Hero;
