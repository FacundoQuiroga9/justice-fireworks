import './Gender.css'
import foto from '../../images/gender reveal.png'

const Gender = ()=>{
  return (
    <div id='gender-reveal'>
      <div className="gender-info">
        <h3 className='gender-title'><span>GENDER</span> REVEAL</h3>
        <p className='gender-text'> Make the announcement of your baby's gender as bright as their future!
        </p>
      </div>
      <div className='foto-container'>
        <img src={foto} alt="fireworks" className='fireworks-foto' />
      </div>
    </div>
  )
}
export default Gender
