import './About.css'
import steve from '../../images/steve.jpg'

const About = () =>{
  return(
    <>
    <div id='about' className="about-container">
      <div className="about-info">
        <h3 className='about-title'>Dynamite Fireworks</h3>
        <p className='about-text'>
          ¡Bienvenidos a Dynamite Fireworks! Con una selección espectacular de más de 2,000 tipos de fuegos artificiales, ofrecemos la mejor experiencia para transformar cualquier ocasión en un evento inolvidable.<br></br><br></br>

          Nuestro propietario, Steve, es el capitán del barco con más de 20 años de experiencia en la industria. Su dedicación y conocimiento han convertido a Dynamite Fireworks en el referente indiscutible para aquellos que buscan llevar la celebración al siguiente nivel.<br></br><br></br>

          En Dynamite Fireworks, nuestro equipo está orgulloso de ofrecer un servicio excepcional a nuestros clientes. Estamos comprometidos en ayudarte a encontrar la combinación perfecta de colores, formas y efectos para hacer de tu evento algo verdaderamente extraordinario.<br></br><br></br>
        </p>
      </div>
      <div className="steve-container">
      <p className='frase'>
        "En Dynamite Fireworks creamos momentos mágicos y experiencias únicas iluminando el cielo"
      </p>
      </div>

    <div className='frase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus saepe a quas tempore qui minus perferendis provident libero nulla. Aperiam qui non, provident ipsam atque necessitatibus? Quae quaerat in facilis laudantium, hic nobis, aut corrupti magnam doloremque atque nisi.
    </div>
    </div>
    </>
  )
}

export default About
