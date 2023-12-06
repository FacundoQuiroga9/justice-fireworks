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

const Slider = () => {
  return(
    <>
      <img id='brands' className='dibujo' src={dibujo} alt="" />
      <div className="logos" >
      <div className="logos-slide">
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
    </div>
    </>
  )
}

export default Slider
