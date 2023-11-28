import './Hero.css'
import Image1 from '../../images/Dynamite.jpeg';
import Image2 from '../../images/Dynamite.jpg';
import Image3 from '../../images/Dynamite2.jpg';
import Image4 from '../../images/Dynamite4.jpg';
import video from "../../video/Dynamite2.mp4";

const Hero = ()=> {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="58000">
        <video autoPlay muted loop>
          <source src={video} />
       </video>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={Image1} className="d-block w-100 image-custom" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={Image2} className="d-block w-100 image-custom" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={Image3} className="d-block w-100 image-custom" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={Image4} className="d-block w-100 image-custom" alt="..." />
        </div>

      </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
</div>
  );
}

export default Hero;
