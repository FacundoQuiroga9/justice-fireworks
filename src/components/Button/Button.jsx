/* eslint-disable react/jsx-no-target-blank */
import './Button.css'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Button = (props)=> {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const contactButtonsAnimation = {
    hidden: {  scale: 0, opacity:0},
    visible: { scale: 1, opacity: 1 },
  };
  return (
    <motion.button className='button-container'
    ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={contactButtonsAnimation}
        transition={{duration:1, delay: 1.5}}
    >
      {props.children}
    </motion.button>
  )
}
export default Button
