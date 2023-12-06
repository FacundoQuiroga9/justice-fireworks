import './Contact.css'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Contact = ()=>{
  return (
    <div className="map">
      <MapContainer center={{lat: '33.00017049068368', lng: '-96.2360017157822'}} zoom='15'>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={{lat: '33.00017049068368', lng: '-96.2360017157822'}} />
      </MapContainer>
      <h3>LOCATION & CONTACT</h3>
    </div>
  )
}

export default Contact
