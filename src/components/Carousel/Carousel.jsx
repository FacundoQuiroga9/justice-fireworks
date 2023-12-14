import { useEffect, useState } from 'react'
import './Carousel.css'
import wedding1 from '../../images/wedding1.jpg'
import wedding2 from '../../images/wedding2.jpg'
import wedding3 from '../../images/wedding3.jpg'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';


 const Carousel = ()=> {
  const images = [wedding1, wedding2, wedding3]
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    const interval = setInterval(()=>{
      selectNewImage(selectedIndex, images)
    },5000)
    return()=>clearInterval(interval)
  })

  const selectNewImage = (index, images, next=true)=>{
    setLoaded(false)
    setTimeout(()=>{
    const condition = next? selectedIndex < images.length-1 : selectedIndex > 0
    const nextIndex =  next ? (condition ? selectedIndex + 1:0) : condition ? selectedIndex -1 : images.length -1
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex)
    },600)
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const carouselAnimation = {
    hidden: {  x:-300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };

  return(
    <motion.div className='carrousel-container'
    ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={carouselAnimation}
        transition={{duration:1, delay:.5}}>
      <img className={`carrousel-image ${loaded ?'loaded':''}`} src={selectedImage} alt="foto de la habitacion" onLoad={()=>setLoaded(true)}/>
    </motion.div>
  )
}

export default Carousel
