import './Contact.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {useTranslation} from 'react-i18next'
import Button from '../Button/Button'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const Contact = ()=>{
  const [t, i18n]= useTranslation("global")

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const contactMapAnimation = {
    hidden: {  x:-300, opacity:0},
    visible: { x: 0, opacity: 1 },
  };

  const contactTitleAnimation = {
    hidden: {  x:100, opacity:0},
    visible: { x: 0, opacity: 1 },
  };
  const contactInfoAnimation = {
    hidden: {  opacity:0 },
    visible: { opacity: 1 },
  };
  const contactButtonsAnimation = {
    hidden: {  scale: 0, opacity:0},
    visible: { scale: 1, opacity: 1 },
  };
  return (
    <div id='map' className="map">

      <MapContainer center={{lat: '33.00017049068368', lng: '-96.2360017157822'}} zoom='15'>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={{lat: '33.00017049068368', lng: '-96.2360017157822'}}>
          <Popup>Dynamite Fireworks</Popup>
        </Marker>
      </MapContainer>

      <div className='contact-info'>
        <motion.h3 className='contact-title'
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={contactTitleAnimation}
        transition={{duration:1, delay: .5}}>
          <span>{t("location.title1")}</span> {t("location.title2")}
          </motion.h3>
        <motion.h4 className='address-title'
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={contactInfoAnimation}
        transition={{duration:1, delay: 1}}>
          {t("location.address")}
        </motion.h4>
        <motion.p className='direccion address-text'
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={contactInfoAnimation}
        transition={{duration:1, delay: 1}}>
          <i className="fa-solid fa-location-dot"></i> 5159 Interstate 30W, Caddo Mills TX 75135
        </motion.p>
        <Button><a href="https://www.google.com/maps/place/Dynamite+Fireworks+Superstore/@32.9989337,-96.2364008,17z/data=!3m1!4b1!4m6!3m5!1s0x864be39890b15c07:0xc618df042439d91f!8m2!3d32.9989337!4d-96.2364008!16s%2Fg%2F11l2ztsf7l?hl=en&entry=ttu" target='_blank' rel="noreferrer">VIEW MAP</a>
        </Button>
        <motion.h4 className='phone-title'
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={contactInfoAnimation}
        transition={{duration:1, delay: 1}}>
          {t("footer.phone")}
        </motion.h4>
        <Button><a href="tel: +19729775193"><i className="fa-solid fa-phone"></i> Call</a></Button>
        <motion.h4 className='social-media-title'
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={contactInfoAnimation}
        transition={{duration:1, delay: 1}}>
          <i className="fa-solid fa-laptop"></i> {t("footer.social-media")}
          </motion.h4>
        <div className='social-media-contact-container'>
          <motion.a className='media-link-contact' href="https://www.facebook.com/profile.php?id=61550935544961" target="_blanck"
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={contactButtonsAnimation}
          transition={{duration:1, delay: 1.5}}>
            <i className="fa-brands fa-square-facebook"></i>
          </motion.a>
          <motion.a className='media-link-contact' href="https://www.instagram.com/dynamite_fireworks_/" target="_blanck"
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={contactButtonsAnimation}
          transition={{duration:1, delay: 1.5}}>
          <i className="fa-brands fa-instagram"></i>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Contact
