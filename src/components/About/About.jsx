import './About.css'
import steve from '../../images/steve justice.jpg'

const About = () =>{
  return(
    <>
    <div className="about-container">
      <div className="about-info">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptas quas ratione distinctio doloribus tempora fugit perspiciatis voluptatem nisi aperiam omnis vel eum quisquam in totam, saepe ullam cumque illum?</p>
      </div>
    <img src={steve} className='steve' alt="" />

    </div>
    </>
  )
}

export default About
