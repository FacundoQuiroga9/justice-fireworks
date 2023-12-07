import './Contact.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {useTranslation} from 'react-i18next'
import Button from '../Button/Button'


const Contact = ()=>{
  const [t, i18n]= useTranslation("global")
  return (
    <div id='map' className="map">
      <MapContainer center={{lat: '33.00017049068368', lng: '-96.2360017157822'}} zoom='15'>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={{lat: '33.00017049068368', lng: '-96.2360017157822'}}>
          <Popup>Dynamite Fireworks</Popup>
        </Marker>
      </MapContainer>
      <div className='contact-info'>
        <h3 className='contact-title'><span>{t("location.title1")}</span> {t("location.title2")}</h3>
        <h4 className='address-title'>{t("location.address")}</h4>
        <p className='direccion address-text'><i className="fa-solid fa-location-dot"></i> 5159 Interstate 30W, Caddo Mills TX 75135</p>
        <Button>
          <a href="https://www.google.com/maps/place/Dynamite+Fireworks+Superstore/@32.9989337,-96.2364008,17z/data=!3m1!4b1!4m6!3m5!1s0x864be39890b15c07:0xc618df042439d91f!8m2!3d32.9989337!4d-96.2364008!16s%2Fg%2F11l2ztsf7l?hl=en&entry=ttu" target='_blank' rel="noreferrer">VIEW MAP
          </a>
        </Button>
        <h4 className='phone-title'>{t("footer.phone")}</h4>
        <Button><a href="tel: +19729775193"><i className="fa-solid fa-phone"></i> Call</a></Button>
        <h4 className='social-media-title'><i className="fa-solid fa-laptop"></i> {t("footer.social-media")}</h4>
        <div className='social-media-contact-container'>
          <a className='media-link-contact' href="https://www.facebook.com/profile.php?id=61550935544961" target="_blanck">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a className='media-link-contact' href="https://www.instagram.com/dynamite_fireworks_/" target="_blanck">
          <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
